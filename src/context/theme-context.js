import {createContext}  from 'react';
// themes object for 
const themes = {
    dark: {
        backgroundColor: black,
        color: white
    },
    light: {
        backgroundColor: white,
        color: black
    }
}
const initialState = {
    dark: false,
    theme: themes.light,
    toggle: ()=> {}
};
//  context declare
const ThemeContext = createContext(initialState);


//  Context component which provide theme context to children
function ThemeProvider(props) {
    return(
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
    );
}