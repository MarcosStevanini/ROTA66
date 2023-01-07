import { auth } from './../../../services/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { useAuthState } from 'react-firebase-hooks/auth';

const useHome = () => {
  const [user] = useAuthState(auth);
  const navigator = useNavigation();

  if (!user?.displayName) navigator.navigate('Profile');

  return {
    users: {
      name: user?.displayName
    },
  }
};

export default useHome;