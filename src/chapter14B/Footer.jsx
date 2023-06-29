import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';

const Footer = () => {
    const { isDark, setIsDark } = useContext(ThemeContext);

    const action = () => {
        setIsDark(!isDark);
    };

    return (
        <footer
            className='footer'
            style={{
                backgroundColor: isDark ? 'black' : 'lightgray',
            }}
        >
            <button className='button' onClick={action}>
                테마
            </button>
        </footer>
    )
}

export default Footer