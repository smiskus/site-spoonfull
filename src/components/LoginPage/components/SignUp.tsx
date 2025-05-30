import { useCallback } from "react";

interface SignInProps {
  handleSignIn: () => void;
}

export const SignUp = ({ handleSignIn }: SignInProps) => {
  const handleSubmit = useCallback(() => {
    handleSignIn();
  }, [handleSignIn]);

  return (
    <>
      <h2>Create account</h2>
      <div>
        <i>Keep track of all the delectable dishes you've tasted.</i>
      </div>
      <form onSubmit={handleSubmit} style={{ margin: "5px 0px" }}>
        <div>
          <input name="username" placeholder="Username" required></input>
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          ></input>
        </div>
        <div>
          <input
            name="password-confirmation"
            type="password"
            placeholder="Confirm password"
            required
          ></input>
        </div>
        <div>
          <input name="email" placeholder="Email address" required></input>
        </div>
        <div>
          <button type="submit">Create account</button>
        </div>
      </form>
      <div>
        <div>Already have an account?</div>

        <button className="sign=in-button" onClick={handleSignIn}>
          Sign in here
        </button>
      </div>
    </>
  );
};
