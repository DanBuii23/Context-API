import { createContext, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho context
interface UserContextType {
  user: string;
  age: number;
}

// Khởi tạo UserContext với giá trị mặc định
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const user = "Đan Bùi";
  const age = 18;

  return (
    <UserContext.Provider value={{ user, age }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
