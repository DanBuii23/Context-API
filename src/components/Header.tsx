import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import { UserContext } from "../contexts/userContext";

export const Header = () => {
  const theme = useContext(ThemeContext);
  const user = useContext(UserContext);

  return (
    <div>
      <p className={theme?.theme}>
        Xin chào {user?.user} đã đến với chương trình
      </p>
    </div>
  );
};
