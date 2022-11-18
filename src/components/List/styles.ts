import styled, { css } from "styled-components";

interface DetailStockStatus {
    lowStock?: boolean;
    noneStock?: boolean;
}


export const BlockItem = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 0 15px 15px 10px;
    border-bottom: 2px solid #c4c4c4;
    background: #fafafa;
    word-break: break-word;
`;

export const InfoItem = styled.div`
    max-width: 65%;
    width: 100%;

    h1 {
        margin: 0;
        padding-top: 10px;
        color: #3a58ea;
        font-size: 20px;
        font-weight: 400;
    }

    div {
        color: #989898;
        font-size: 13px;
    }

    &:first-child {
        margin-top: 5px;
    }
`;

export const ItemQuantity = styled.div<DetailStockStatus>`
    max-width: 35%;
    width: 100%;
    text-align: end;
    display: flex;
    flex-direction: column;

    strong {
        color: #3a58ea;
    }

    p {
        margin: 0;
        display: none;

        ${props =>
            props.noneStock &&
            css`
                display: block;
                color: #eb183d;
            `
        }

        ${props =>
            props.lowStock &&
            css`
                display: block;
                color: #e5a327;
            `
        }
    }
`;