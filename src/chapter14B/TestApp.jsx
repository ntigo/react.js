import { useState } from 'react';
import './App.css';
import Page from './Page';
import { ThemeContext } from './context/ThemeContext';
import { UserContext } from './context/UserContext';

function TestApp() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <UserContext.Provider value={'박상봉'}>
      <ThemeContext.Provider value={{ isDark, setIsDark }}>
        <Page />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default TestApp;