import { useContext } from "react";
import UserProvider from "../contexts/userContext";
import { Dashboard } from "./dashboard";
import UserProfile from "./userProfile";
import { ThemeContext } from "../contexts/themeContext";
import "../App.css";
import { Header } from "./Header";

export const UserApp = () => {
  const themeContext = useContext(ThemeContext) || {
    theme: String,
    changeTheme: () => {},
  };
  return (
    <UserProvider>
      <Header />
      <hr />
      <Dashboard />
      <UserProfile />
      <button onClick={themeContext?.changeTheme}>Đổi nền</button>
    </UserProvider>
  );
};
