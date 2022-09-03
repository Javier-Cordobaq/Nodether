import styled from 'styled-components'

export const Layout = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: #d1d1d1;

    @media (min-width: 768px){
        max-width: 768px;
    }

    @media (min-width: 1280px){
        max-width: 1280px;
    }

    @media (min-width: 1536px){
        max-width: 1536px;
}
`