import { useSelector } from "react-redux"
import { CardDiv } from "../styled-components"

const Card = () => {

    const stepDetail = useSelector(c => c.stepDetail)
    const words = stepDetail.length !== 0 ? stepDetail[0].keywords.split(',') : []
    console.log(words, 'Palabras')

    return (
        <CardDiv>
            {
                stepDetail.length !== 0 ?
                    <div>
                        <h2>{stepDetail[0].option_key}</h2>
                        {words.map(c => <p>{c}</p>)}
                    </div>
                    :
                    <p>Aun no haz seleccionado un paso</p>
            }
        </CardDiv>
    )
}

export default Card