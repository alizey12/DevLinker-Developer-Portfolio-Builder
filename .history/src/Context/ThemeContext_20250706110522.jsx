import {useState,useEffect,useContext,createContext, Children  } from "react";
export const ThemeContext = createContext();

export default ThemeProvider=({children})=>{
const [THEME, setTHEME] = useState();

    return(
        <ThemeContext.Provider>
{children}
        </ThemeContext.Provider>
    );
};