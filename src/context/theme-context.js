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
//  context declaretion
const ThemeContext = createContext(initialState);


//  Context component which provide theme context to children
function ThemeProvider(props) {
    
    // default theme light
    const [dark, setDark] = useState(false);
    
    // * Toggle Function for changing theme color
    const toggle =()=> {
        localStorage.setItem('dark',JSON.stringify(!data))
        setDark(!dark);
    }

    return(
        <ThemeContext.Provider>
            {props.children}
        </ThemeContext.Provider>
    );
}