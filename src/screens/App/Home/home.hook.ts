import { auth } from './../../../services/firebaseConfig';
import { useAuthState } from 'react-firebase-hooks/auth';

const useHome = () => {
  const [user] = useAuthState(auth);

  return {
    users: {
      name: user?.displayName,
      email: user?.email,
      numberPhone: user?.phoneNumber
    },
  }
};

export default useHome;