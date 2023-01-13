import { useContext, useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signUp } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { Alert } from "react-native";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  const signupHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    try {
      const token = await signUp(email, password);
      authCtx.authenticate(token);
    } catch (e) {
      Alert.alert(
        "Autentication failed!",
        "Could not create user. Please check your inputs and try again later! "
      );
      setIsAuthenticating(false);
    }
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Creating user..." />;
  }

  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
