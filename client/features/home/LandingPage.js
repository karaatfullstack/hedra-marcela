import React from "react";
import AuthForm from "../auth/AuthForm";

const LandingPage = () => {
  return (
    <div className="start-bg">
      <h1 id="mainTitle">Welcome to Hedra Systems</h1>
      <div id="login">
        <AuthForm name="login" displayName="Login" />
      </div>
    </div>
  );
};

export default LandingPage;
