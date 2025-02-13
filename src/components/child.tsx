import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const ChildComponent = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("ChildComponent must be used within a UserProvider");
  }
  const { user } = context;

  return <p className="text-3xl">Hello, {user}!</p>;
};

export default ChildComponent;
