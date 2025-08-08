import Button from '@/components/button/Button';
import useProfile from '@/hooks/useProfileQuery';
import { useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from '@/components/error/ErrorMsg';
import { useUserLocationStore } from '@/store/useUserLocationStore';

export default function ProfileMain() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: profileData, isPending, isError, error } = useProfile();
  const { setLocation } = useUserLocationStore();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <ErrorMsg errorMessage={error.message} />;

  const logoutHandler = () => {
    localStorage.removeItem('accessToken'); // 로그인 토큰 삭제
    queryClient.clear(); // 모든 감정기록 캐시 초기화
    setLocation(''); // location 스토어 초기화
    navigate('/login');
  };

  return (
    <div>
      <div className="flex flex-col items-center py-8">
        <div className="w-[96px] h-[96px] rounded-full overflow-hidden ">
          <img
            className="block w-full h-full"
            src="/images/profile_dummy.png"
            alt="profile dummy"
          />
        </div>
        <div className="flex flex-col items-center gap-1 mt-4 text-sm text-text-gray">
          <strong className="text-text-default text-xl">
            {profileData?.nickName}
          </strong>
          <span className="text-text-gray">{profileData?.email}</span>
          <span className="text-text-gray">
            <img
              className="w-[15px] h-[20px] inline-block"
              src="/icons/location.svg"
              alt="location"
            />
            {profileData?.cityName}
          </span>
        </div>
        <Button
          theme="POSITIVE"
          title="Edit Profile"
          addClass="mt-4"
          onClick={() => {
            navigate('/profile/edit');
          }}
        />
      </div>
      <Button
        theme="RED"
        title="Logout"
        addClass="mt-4 w-full"
        onClick={logoutHandler}
      />
    </div>
  );
}
