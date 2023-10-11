
import { useContext } from 'react'
import { primaryContext } from '../../Context/primaryContext'

const ComplimentButton = () => {
  const { setCurrentMood, compliments, setCompliments } = useContext(primaryContext)
  



  

  return (
    <>

   <button onClick={(e)=> setCompliments(compliments + 1)}>Compliments</button> 
   <button onClick={(e)=> setCompliments(compliments - 1)}>Put Downs</button> 
<h3>
{compliments}

</h3>
</>
  )
}

export default ComplimentButton