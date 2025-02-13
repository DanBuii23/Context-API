import UserProvider from "../contexts/userContext";
import ChildComponent from "./child";

const ParentComponent = () => {
  return (
    <UserProvider>
      <ChildComponent />
    </UserProvider>
  );
};

export default ParentComponent;
