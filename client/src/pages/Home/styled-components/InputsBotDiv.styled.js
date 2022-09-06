import styled from 'styled-components'

export const InputsBotDiv = styled.div`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 50%;
    height: 100%;
    color: #7f7f7f;
    box-sizing: border-box;
    padding: 2rem 3rem;
    overflow: auto;

    ::-webkit-scrollbar{
        width: 0.3rem;
    }
    ::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: #191919;
    }
    ::-webkit-scrollbar-thumb{
        border-radius: 10px;
        background-color: #202020;
    }

    h1 {
        margin: 0;
    }

`

export const ContainerInputsBot = styled.div`

    display: ${props => props.history ? 'flex' : ''};
    width: 100%;
    height: 'auto';
    background-color: #202020;
    border-radius: 0.5rem;
    margin: 1rem 0;
    box-sizing: border-box;
    padding: 1rem;

    .container-buttons {
        display: flex;
    }
    .cont-Nav {
        overflow: auto;
        margin-right: 1rem;
        width: 30%;
    }

    .cont-Nav::-webkit-scrollbar{
        width: 0;
    }

`