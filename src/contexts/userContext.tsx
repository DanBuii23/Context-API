import { createContext, useState, ReactNode } from "react";

// Định nghĩa kiểu dữ liệu cho context
interface UserContextType {
  user: string;
  age: number;
  setAge: React.Dispatch<React.SetStateAction<number>>;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}

// Khởi tạo UserContext với giá trị mặc định
export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

interface UserProviderProps {
  children: ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<string>("Đan Bùi");
  const [age, setAge] = useState<number>(23);

  return (
    <UserContext.Provider value={{ user, setUser, age, setAge }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
