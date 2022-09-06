import { useSelector } from "react-redux"
import { CardDiv } from "../styled-components"

const CardReply = () => {

  const replyByKey = useSelector(c => c.replyByKey)
  console.log(replyByKey, 'Replys')
 
  return (
    <CardDiv>
      {
        replyByKey.length !== 0 ?
          <div>
            <h2>{replyByKey[0].key}</h2>
            <p>{replyByKey[0].replyMessage}</p>
          </div>
          :
          <h1>Aun no haz seleccionado un paso</h1>
      }
    </CardDiv>
  )
}

export default CardReply