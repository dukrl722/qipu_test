import styled, { css } from "styled-components";

interface OpenModal {
    open: boolean;
}

export const Modal = styled.div<OpenModal>`
    display: none;
    position: absolute;
    width: 100%;
    height: 100vh;
    background: linear-gradient(#fafafa, #f2f9fc);
    top: 0;

    ${props => 
        props.open &&
        css`
            display: flex;
            flex-direction: column;
        `
    }
`;

export const HeaderModal = styled.div`
    position: relative;
    background: #47b3c0;
    border-radius: 30px 30px 0 0;
    top: 50px;
    height: 140px;
    color: #ffffff;

    div {
        display: flex;
        padding: 15px 10px 0;
        justify-content: space-between;

        div {
            display: flex;
            padding: 0;

            svg {
                padding-right: 10px;
            }
        }
    }
`;

export const ImgProduct = styled.div`

    display: flex;
    justify-content: flex-start !important;
    align-items: center;

    div {
        border-radius: 8px;
        margin-left: 30px;
        width: 70px;
        height: 70px;
        background: #ffffff;

        img {
            max-width: 100%;
            object-fit: contain;
        }
    }

    p {
        margin-left: 20px;
    }
`;

export const BodyModal = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 0 20px;
`;

export const ItemBodyModal = styled.div`

    display: flex;
    flex-direction: column;

    p {
        margin-bottom: 0;
        font-size: 14px;
        color: #989898;
    }

    span {
        font-size: 16px;
        color: #000000;
    }
`;