
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const Emojis = () => {
  const {currentMood, setCurrentMood, compliments} = useContext(primaryContext)
  


  if (compliments < 5) {
    setCurrentMood("sad");
  } else if (compliments >= 5 && compliments <= 9) {
    setCurrentMood("neutral");
  } else if (compliments >= 10 && compliments <= 15) {
    setCurrentMood("happy");
  }


  return (
   <>
   <div>
{currentMood}
    <p>{currentMood === "happy" ? '😃' : " "}</p>
    <p>{currentMood === "neutral" ? "😐" : " "}</p>
    <p>{currentMood === "sad" ? "😕" : " "}</p>
   </div>
 

   </>
  )
}

export default Emojis