import {createContext, useCallback, useContext, useEffect, useState}  from 'react';
// themes object for 
const themes = {
    dark: {
        backgroundColor: "black",
        color: "white"
    },
    light: {
        backgroundColor: "white",
        color: "black"
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

    // On mount, read the preferred theme from the persistence
    useEffect(()=>{
        const isDark = localStorage.getItem('dark') === 'true';
        setDark(isDark);
    },[dark] )
    
    // * Toggle Function for changing theme color
    const toggle =()=> {
        localStorage.setItem('dark',JSON.stringify(!dark))
        setDark(!dark);
    }

    // filter the styles based on the theme selected
    const theme= dark ? themes.dark: themes.light; 

    return(
        <ThemeContext.Provider value ={{theme, dark, toggle}}> 
            {props.children}
        </ThemeContext.Provider>
    );
}

export const UseContextValue = ()=> useContext(ThemeContext);
export  {ThemeProvider};