import { useDispatch, useSelector } from 'react-redux'
import { Button, Input, Layout, LayoutResponsive } from '../../styled-components'
import Nav from '../../components/Nav'
import { ContainerInputsBot, InputsBotDiv } from './styled-components/InputsBotDiv.styled'
import CardSteps from './components/CardSteps'
import CardReply from './components/CardReply'
import { StepsNav } from './components'
import { useEffect, useState } from 'react'
import { getAllSteps } from '../../redux/actions'
import { getAllStepsService } from './services/getStepsInfoService'

const Home = () => {

  const dispatch = useDispatch();

  const getStepsInfo = async () => {
    const data = await getAllStepsService();
    dispatch(getAllSteps(data))
  }

  useEffect(() => {
    getStepsInfo();
  }, [])

  const pasos = useSelector(c => c.info);

  return (
    <Layout>
      <Nav />
      <LayoutResponsive>
        <InputsBotDiv>
          <h1>Palabras Clave.</h1>
          <ContainerInputsBot>
            <div className='container-buttons'>
              <Input placeholder='Paso_1'></Input>
              <Button>
                Agregar palabras
                <span className="material-symbols-outlined">
                  add_circle
                </span>
              </Button>
            </div>
            <div className='container-buttons'>
              <Input placeholder='Palabras Clave'></Input>
              <Button>
                Crear Paso
                <span className="material-symbols-outlined">
                  add_circle
                </span>
              </Button>
            </div>
          </ContainerInputsBot>
          <h1>Pasos Creados.</h1>
          <ContainerInputsBot history>
            <div className='cont-Nav'>
              {
                pasos.length !== 0 ? pasos.map(c => (<StepsNav key={c.key} info={c.option_key} />)) : null
              }
            </div>
            <CardSteps />
          </ContainerInputsBot>
        </InputsBotDiv>
        <InputsBotDiv>
          <h1>Respuestas.</h1>
          <ContainerInputsBot history>
            <CardReply />
          </ContainerInputsBot>
        </InputsBotDiv>
      </LayoutResponsive>
    </Layout>
  )
}

export default Home