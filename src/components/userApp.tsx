import { useContext } from "react";
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
    <>
      <Header />
      <hr />
      <Dashboard />
      <UserProfile />
      <button onClick={themeContext?.changeTheme}>Đổi nền</button>
    </>
  );
};
