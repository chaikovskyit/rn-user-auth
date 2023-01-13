import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signUp } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      await signUp(email, password);
    } catch (e) {
      Alert.alert(
        "Autentication failed!",
        "Could not create user. Please check your inputs and try again later! "
      );
    }
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
