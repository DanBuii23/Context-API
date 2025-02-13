import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const UserProfile = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error!");
  }
  const { user, age } = context;

  return (
    <p className="text-3xl">
      Thông tin cá nhân: {user}, {age} tuổi!
    </p>
  );
};
export default UserProfile;
