import UserProvider from "../contexts/userContext";
import Header from "./Header";
import UserProfile from "./userProfile";

export const UserApp = () => {
  return (
    <UserProvider>
      <Header />
      <hr />
      <UserProfile />
    </UserProvider>
  );
};
