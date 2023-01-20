import React from "react";
import AuthForm from "../auth/AuthForm";

const LandingPage = () => {
  return (
    <div className="start-bg">
      <h1 className="mainTitle">Welcome to Hedra Management</h1>
      <h3 className="mainTitle">Please Login Below</h3>
      <div id="login">
        <AuthForm name="login" displayName="Login" />
      </div>
    </div>
  );
};

export default LandingPage;
