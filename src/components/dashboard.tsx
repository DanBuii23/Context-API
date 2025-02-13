import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

export const Dashboard = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error");
  }
  const { user } = context;

  return (
    <div>
      <h2 className="text-3xl justify-self-center">Welcome, {user}!</h2>
    </div>
  );
};
