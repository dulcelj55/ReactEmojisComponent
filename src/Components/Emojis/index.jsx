import React from 'react'
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'
// import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
// import TagFacesIcon from '@mui/icons-material/TagFaces';
// import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
const Emojis = () => {
  const {currentmood} = useContext(primaryContext)
  

 
   
  
  
 


  return (
   <>
 face is :{currentmood}
 <br/>
{/* <TagFacesIcon/> 
< SentimentVeryDissatisfiedIcon/>
<SentimentNeutralIcon /> */}

   </>
  )
}

export default Emojis