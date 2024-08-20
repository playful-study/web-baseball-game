import React, { createContext, useState } from 'react';

// UserContext 생성
export const UserContext = createContext();

// UserProvider 컴포넌트
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData); // 로그인 시 사용자 정보를 설정
  };

  const logout = () => {
    setUser(null); // 로그아웃 시 사용자 정보를 제거
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
