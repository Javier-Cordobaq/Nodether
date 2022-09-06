import styled from "styled-components";

export const LayoutResponsive = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;

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