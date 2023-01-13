import { useState } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { signIn } from "../util/auth";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const signinHandler = async ({ email, password }) => {
    setIsAuthenticating(true);
    await signIn(email, password);
    setIsAuthenticating(false);
  };

  if (isAuthenticating) {
    return <LoadingOverlay message="Logging you in..." />;
  }

  return <AuthContent isLogin onAuthenticate={signinHandler} />;
}

export default LoginScreen;
