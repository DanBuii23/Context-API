import { useContext } from "react";
import { UserContext } from "../contexts/userContext";

const Header = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("Error!");
  }
  const { user } = context;

  return <p className="text-3xl">Chúc {user} một ngày tốt lành!</p>;
};
export default Header;
