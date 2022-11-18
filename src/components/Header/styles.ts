import styled from "styled-components";

export const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px;
    border-bottom: 2px solid #c4c4c4;
    background: #ffffff;

    svg {
        padding-right: 5px;
        color: #47b3c0;
    }
`;

export const Menu = styled.div`
    div {
        border-radius: 2px;
        height: 3px;
        margin: 7px;
        width: 25px;
        background: #47b3c0;
    }
`;

export const Title = styled.h1`
    color: #47b3c0;
    font-weight: 400;
    margin: 0;
    font-size: 20px;
`;