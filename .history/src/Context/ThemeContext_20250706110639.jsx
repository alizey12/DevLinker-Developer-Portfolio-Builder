import {useState,useEffect,useContext,createContext, Children  } from "react";
export const ThemeContext = createContext();

export default ThemeProvider=({children})=>{
const [theme, setTheme] = useState('light');


useEffect(() => {
    
    return () => {
        
    };
}, []);
    return(
        <ThemeContext.Provider>
{children}
        </ThemeContext.Provider>
    );
};