import React from 'react';
export const UserContext = React.createContext();
export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <User />
    </UserContext.Provider>
  )
}
function User() {
  // 바른 사용법  
  const value = React.useContext(UserContext);  

  // 잘못된 사용법, 훅을 사용 시 파라미터로 컨텍스트 객체를 넣어줘야함
  React.useContext(UserContext.Consumer);  
  return <h1>{value}</h1>;
}