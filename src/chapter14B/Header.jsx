import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';

const Header = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <header
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black',
            }}
        >
            <hi>어세오세요 {"user"}! </hi>
        </header>
    )
}

export default Header;