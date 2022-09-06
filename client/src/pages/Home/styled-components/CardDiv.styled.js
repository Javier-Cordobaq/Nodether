import styled from "styled-components";

export const CardDiv = styled.div`

    display: flex;
    flex-direction: column;
    text-align: left;
    width: 70%;
    max-height: 100%;
    background-color: #7f7f7f;
    border: none;
    padding: 1rem;
    box-sizing: border-box;
    border-radius: 0.3rem;
    margin-bottom: 1rem;
    background-color: #191919;

    &::placeholder {
        color: #202020;
    }
    &:focus {
        outline: none;
    }

    h2 {
        margin: 0;
    }

`