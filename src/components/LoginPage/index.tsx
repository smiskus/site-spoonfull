import { useCallback, useState, type ChangeEvent } from "react";
import "./login.scss";
import { SignIn } from "./components/SignIn";
import { SignUp } from "./components/SignUp";

export const LoginPage = () => {
  // if authenticated redirect to home
  // if not show page

  // Can we see if the user has any cookies to know which to display first?
  const [isSignInPage, setIsSignInPage] = useState(true);

  const handleChangeView = useCallback(() => {
    setIsSignInPage(!isSignInPage);
  }, []);

  return (
    <div className="login-page">
      {isSignInPage ? (
        <SignIn handleCreateAccount={handleChangeView} />
      ) : (
        <SignUp handleSignIn={handleChangeView}/>
      )}
    </div>
  );
};
