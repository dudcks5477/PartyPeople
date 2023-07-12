import {useState} from 'react';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

GoogleSignin.configure({
  webClientId: Config.GOOGLE_WEB_CLIENT_ID,
  offlineAccess: true,
});

export function useGoogleSignIn() {
  const [isSignInProgress, setIsSignInProgress] = useState(false);

  const signInWithGoogle = async () => {
    try {
      setIsSignInProgress(true);
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signInWithGoogle();
      console.log(userInfo);
    } catch(error) {
      console.log(error);
    } finally {
      setIsSignInProgress(false);
    }
  };

  return { isSignInProgress, signInWithGoogle };
}