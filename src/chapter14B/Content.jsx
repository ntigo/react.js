import React, { useContext } from 'react';
import ThemeContext from './ThemeContext';
import UserContext from './UserContext';

const Content = () => {
    const { isDark } = useContext(ThemeContext);
    const user = useContext(UserContext);

    return (
        <div 
            className='content' 
            style={{
                backgroundColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black',
            }}
        >
            <p>{user}님 하이</p>
        </div>
    )
}

export default Content;