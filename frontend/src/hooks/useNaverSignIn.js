import {useState} from 'react';
import NaverLogin, {getProfile as getNaverProfile} from '@react-native-seoul/naver-login';

const initials = {
  kConsumerKey: '<My_naver_app_ke>',
  kConsumerSecret: '<My_naver_app_secret>',
  kServiceAppName: '<My_service_app_name>',
  kServiceAppUrlScheme: '<My_service_app_url_scheme>' // only for ios
};

export function useNaverSignIn() {
  const [naverToken, setNaverToken] = useState(null);
  const [isSignInProgress, setIsSignInProgress] = useState(false);

  const signInWithNaver = async () => {
    try {
      setIsSignInProgress(true);
      const result = await NaverLogin.login(initials);
      if (result.accessToken) {
        setNaverToken(result.accessToken);
        getNaverUserInfo(result.accessToken);
      } else {
        console.log(result);
      }
    } catch(error) {
      console.log(error);
    } finally {
      setIsSignInProgress(false);
    }
  };

  const getNaverUserInfo = async (token) => {
    try {
      const profileResult = await getNaverProfile(token);
      console.log(profileResult);
    } catch (err) {
      console.log(err);
    }
  };

  return {
    naverToken,
    isSignInProgress,
    signInWithNaver,
  };
}
