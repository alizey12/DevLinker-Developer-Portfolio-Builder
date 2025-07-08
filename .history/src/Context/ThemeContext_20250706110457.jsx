import {useState,useEffect,useContext,createContext, Children  } from "react";
export const ThemeContext = createContext();

export default ThemeProvider=({children})=>{


    return(
        <ThemeContext.Provider>
{Children}
        </ThemeContext.Provider>
    );
};