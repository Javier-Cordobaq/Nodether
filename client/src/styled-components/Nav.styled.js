import styled from "styled-components";
import { Link } from 'react-router-dom'

export const LayoutNav = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: ${props => props.size === 'false' ? '15rem' : '5rem'};
    border-right: 1px solid #373737;
    box-sizing: border-box;
    background-color: #202020;
    color: #7f7f7f;

    #hamburguer {
        display: ${props => props.size === 'false' ? 'none' : ''};
        width: 100%;
    }
    &:hover #hamburguer {
        display: none;
    }
    #arrows {
        transition: 0.2s all;
        display: ${props => props.size === 'false' ? '' : 'none'};
        opacity: 0%;
        width: ${props => props.size === 'false' ? '' : '100%'};
    }
    &:hover #arrows {
        opacity: 100%;
        display: block;
    }
    #arrows:hover {
        background-color: #383838; 
        border-radius: 3px;
    }
`

export const Section = styled.div`
    display: flex;
    justify-content: ${props => props.arrows ? 'space-between' : props => props.size === 'false' ? 'left' : 'center'};
    align-items: center;
    height: auto;
    width: 100%;
    box-sizing: border-box;
    padding: 0.5rem 1rem;
    transition: 0.2s all;

    &:hover {
        background-color: #2c2c2c;
        cursor: pointer;
    }

    p {
        display: ${props => props.size === 'false' ? '' : 'none'};
        margin: 0;
        margin-left: ${props => props.arrows ? '' : '0.5rem'};
        font-weight: bold;
        height: 100%;
        font-size: 0.8rem;
    }
    span {
        font-size: ${props => props.arrows ? '' : '1.2rem'};
    }
`

export const StyledLink = styled(Link)`
    color: #7f7f7f;
    text-decoration: none;
`;