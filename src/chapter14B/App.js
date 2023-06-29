import { useState } from 'react';
import './App.css';
import Page from './Page';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <UserContext.Provider value={'박상봉'}>
        <ThemeContext.Provider value={{ isDark:isDark, setIsDark:setIsDark }}>
            <Page />
        </ThemeContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;