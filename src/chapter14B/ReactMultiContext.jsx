import React from 'react';
import { Slider, theme, } from "antd";

const ThemeContext = React.createContext('black');
const UserContext = React.createContext({
    name: "park"
});

class ReactMultiContext extends React.Component {
    render () {
        const { user, theme } = this.props;
        return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={user}>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        );
    }
}

function Layout() {
    return (
        <div>
            <Slider />
            <Content />
        </div>
    );
}

function Content() {
    return (
        <ThemeContext.Consumer>
            {theme => (
                <UserContext.Consumer>
                    {user => {
                        // <ProfilePage user={user} theme={theme} />
                        <div>
                            {user}
                            <div>
                                {theme}
                            </div>
                        </div>
                    }}
                </UserContext.Consumer>
            )}
        </ThemeContext.Consumer>
    );
}

export default ReactMultiContext