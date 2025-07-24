import { useDebounce } from '@/hooks/useDebounce';
import useSearchLocation from '@/hooks/useSearchLocation';
import { Location } from '@/model/signup';
import { useEffect, useRef, useState } from 'react';

interface SearchLocationProps {
  location: {
    longitude: number | null;
    latitude: number | null;
  };
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

export default function InputSearchLocation({
  location,
  setLocation,
}: SearchLocationProps) {
  const [locationName, setLocationName] = useState<string>('');
  const debouncedLocationName = useDebounce(locationName, 500); // 500ms 동안 입력 없으면 값 고정
  const [showDropdown, setShowDropdown] = useState(false);

  const { data, error, isFetching } = useSearchLocation(debouncedLocationName);
  const inputRef = useRef<HTMLInputElement>(null);

  const onChange = (value: string) => {
    setLocationName(value);
    setShowDropdown(true);
  };

  const handleSelect = (item: any) => {
    setLocation({
      longitude: item.lon,
      latitude: item.lat,
    });
    setLocationName(item.name);
    setShowDropdown(false);
    inputRef.current?.blur(); // input blur로 자동완성 닫힘
  };

  useEffect(() => {
    console.log('locationName : ', locationName);
    console.log('location : ', location);
  }, [locationName, location]);
  return (
    <div className="input-box relative">
      <label htmlFor="location" className="text-sm text-text-secondary">
        Location
      </label>
      <input
        id="location"
        ref={inputRef}
        type="text"
        autoComplete="off"
        placeholder="Please enter location in English (ex: Korea, Seoul, Busan)"
        className="mt-2 block box-white w-full sm text-sm rounded-full px-4 py-2"
        value={locationName}
        onFocus={() => setShowDropdown(true)}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTimeout(() => setShowDropdown(false), 100)} // 항목 클릭 처리 위한 딜레이
      />

      {/* 자동완성 드롭다운 */}
      {showDropdown && locationName && data && data.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border border-gray-200 rounded-xl shadow-md mt-1 max-h-52 overflow-auto">
          {data.map((item: any, index: number) => (
            <li
              key={index}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
              onMouseDown={() => handleSelect(item)}
            >
              {item.name} {item.country} {item.state && `(${item.state})`}
            </li>
          ))}
        </ul>
      )}

      {error && (
        <p className="text-red-500 text-xs mt-1">
          에러가 발생하였습니다. 다시 검색해 주세요.
        </p>
      )}
      {isFetching && (
        <div className="text-gray-400 text-xs mt-1">가져오고 있습니다...</div>
      )}
    </div>
  );
}
