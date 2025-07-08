import {useState,useEffect,useContext,createContext, Children  } from "react";
export const ThemeContext = createContext();

export default ThemeProvider=({children})=>{
usest

    return(
        <ThemeContext.Provider>
{children}
        </ThemeContext.Provider>
    );
};