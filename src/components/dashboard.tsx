import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { AuthContext } from "../contexts/authContext";

export const Dashboard = () => {
  const user = useContext(UserContext);
  const authen = useContext(AuthContext);

  return (
    <div>
      <h2>Welcome, {user?.age}!</h2>
      <p>Status: {authen?.isAuthenticated ? "Logged In" : "Logged Out"}</p>
      <button onClick={authen?.isAuthenticated ? authen.logout : authen?.login}>
        {authen?.isAuthenticated ? "Logout" : "Login"}
      </button>
    </div>
  );
};
