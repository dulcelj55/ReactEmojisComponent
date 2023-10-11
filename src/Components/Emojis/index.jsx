
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const Emojis = () => {
  const {currentmood, setCurrentMood, compliments} = useContext(primaryContext)
  


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
{currentmood}
    <p>{currentmood === "happy" ? '😃' : "working "}</p>
    <p>{currentmood === "neutral" ? "😐" : " working"}</p>
    <p>{currentmood === "sad" ? "😕" : "working"}</p>
   </div>
 

   </>
  )
}

export default Emojis