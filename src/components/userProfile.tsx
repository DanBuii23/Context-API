import { useContext } from "react";
import { UserContext } from "../contexts/userContext";
import { ThemeContext } from "../contexts/themeContext";

const UserProfile = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div className={theme?.theme}>
      <h2 className="text-2xl justify-self-center">Thông tin cá nhân</h2>
      <p className="text-xl">
        {user?.user}, {user?.age} tuổi!
      </p>
    </div>
  );
};
export default UserProfile;
