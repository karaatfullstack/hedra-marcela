import React from "react";
import { useSelector } from "react-redux";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <div>
        <h1>Owner Dashboard</h1>
      </div>
      <div>
        <h3>Welcome, {username} !</h3>
      </div>
    </div>
  );
};

export default Home;
