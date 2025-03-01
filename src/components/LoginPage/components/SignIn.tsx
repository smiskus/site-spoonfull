import { useState } from "react";

interface SignInProps {
  handleCreateAccount: () => void;
}

export const SignIn = ({ handleCreateAccount }: SignInProps) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <>
      <h2>Sign in</h2>
      <div></div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="username"
            placeholder="Username or email"
            required
          ></input>
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
          <button type="submit">Sign in</button>
        </div>
      </form>
      <div style={{marginTop: '5px'}}>Or sign up</div>
      <button onClick={handleCreateAccount}>Create an account</button>
    </>
  );
};
