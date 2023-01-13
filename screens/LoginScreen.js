import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signIn } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signinHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await signIn(email, password);
    } catch (e) {
      Alert.alert(
        "Autentication failed!",
        "Could not log you in. Please check your credentials or try again later! "
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
