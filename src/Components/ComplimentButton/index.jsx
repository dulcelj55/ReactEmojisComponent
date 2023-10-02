import {useState} from 'react'

const ComplimentButton = () => {
    const[clicks, setClicks]= useState("")

if (compliments < 5){
    setCurrentMood("sad")
}else if (compliments >= 5 && < 9 ){
    setCurrentMood("fine")
}else if (compliments>=10 && <15){
    setCurrentMood("happy")
}

  return (
    <>
   <button onClick={()=> setClicks(clicks + 1)}>Compliments</button> 
</>
  )
}

export default ComplimentButton