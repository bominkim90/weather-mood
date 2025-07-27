import Button from '@/components/button/Button';
import useProfile from '@/hooks/useProfile';
import { useNavigate } from 'react-router-dom';
import ErrorMsg from '@/components/error/ErrorMsg';

export default function ProfileMain() {
  const navigate = useNavigate();
  const { data: profileData, isPending, isError, error } = useProfile();

  if (isPending) return <div>Loading...</div>;
  if (isError) return <ErrorMsg errorMessage={error.message} />;

  // 가상 데이터
  // const profileData = {
  //   name: 'John Doe',
  //   email: 'john.doe@example.com',
  //   location: {
  //     cityName: 'Seoul',
  //   },
  // };

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
            {profileData?.name}
          </strong>
          <span className="text-text-gray">{profileData?.email}</span>
          <span className="text-text-gray">
            <img
              className="w-[15px] h-[20px] inline-block"
              src="/icons/location.svg"
              alt="location"
            />
            {profileData?.location.cityName}
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
      <Button theme="RED" title="Logout" addClass="mt-4 w-full" />
    </div>
  );
}
