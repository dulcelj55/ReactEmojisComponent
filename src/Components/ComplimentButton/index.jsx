import {useState} from 'react'
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const ComplimentButton = () => {
  const {currentmood, setCurrentMood, compliments, setCompliments } = useContext(primaryContext)
  

  const face = (compliments) => {
    if (compliments < 5) {
       return setCurrentMood("sad");
    } else if (compliments >= 5 && compliments <= 10) {
      return setCurrentMood("fine");
    } else if (compliments > 10) {
    return setCurrentMood("happy");
    }
  }

  return (
    <>
   <button onClick={()=> setCompliments(compliments + 1)}>Compliments</button> 

{compliments}
{currentmood}
</>
  )
}

export default ComplimentButton