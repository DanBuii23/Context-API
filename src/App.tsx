import ParentComponent from "./components/parents";
import { UserApp } from "./components/userApp";

const App = () => {
  return (
    <div>
      <UserApp />
      <ParentComponent />
    </div>
  );
};

export default App;
