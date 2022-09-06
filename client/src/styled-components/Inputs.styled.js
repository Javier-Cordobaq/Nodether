import styled from "styled-components";

export const Input = styled.input`

    width: 100%;
    height: 3rem;
    background-color: #7f7f7f;
    border: none;
    padding: 0 1rem;
    box-sizing: border-box;
    border-radius: 0.3rem;
    margin-bottom: 1rem;
    margin-right: 1rem;

    &::placeholder {
        color: #202020;
    }
    &:focus {
        outline: none;
    }

`