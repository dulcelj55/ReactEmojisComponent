import { createContext } from "react";
import {useState} from 'react'

 export const primaryContext = createContext();
    const PrimaryProvider = (props) =>{
    const[currentMood, setCurrentMood] = useState('sad')
    const [compliments, setCompliments] = useState(0)
  

   
    
    return (
        <primaryContext.Provider value={
            {compliments,
                setCompliments,
                currentMood,
                setCurrentMood
                


            }
        }>
        {props.children}
   
    </primaryContext.Provider>

    )}
    export default PrimaryProvider