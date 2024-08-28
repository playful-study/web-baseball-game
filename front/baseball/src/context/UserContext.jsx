import React, { createContext, useState, useEffect } from 'react';

// UserContext 생성
export const UserContext = createContext();

// UserProvider 컴포넌트
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // 컴포넌트가 처음 렌더링될 때 사용자 정보를 가져오는 함수
  useEffect(() => {
    const storedUser = localStorage.getItem("loginUser");
    setUser(storedUser);
  }, []);

  const login = (userData) => {
    localStorage.setItem("loginUser", userData.nickname);
    setUser(userData.nickname);
  };

  const logout = () => {
    localStorage.removeItem("loginUser");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
