import styled from "styled-components";

type Props = {
    open: boolean;
}

export const BodyProductName = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
`;

export const Information = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 20px;

    div {
        display: flex;
        justify-content: space-between;
        color: #fff;
        margin: 10px 0;

        span {
            text-decoration: underline;
        }

        p {
            margin: 0;

            svg {
                margin: 1px;
            }
        }
    }
`;


export const NewCategory = styled.div<Props>`
    display: flex;
    width: 100%;
    align-items: center;

    input {
        width: 100%;
        margin-top: 15px;
        height: 40px;
        border: 0;
        border-bottom: 1px solid #ffffff;
        background: transparent;
        color: #ffffff;
        display: ${props => props.open ? 'block' : 'none'};
    }

    svg {
        display: ${props => props.open ? 'block' : 'none'};
    }
`;

export const ButtonNext = styled.div`
    text-align: center;
    bottom: 0;
    border-top: 2px solid #ffffff;
    font-size: 30px;
    color: #ffffff;
    padding: 15px 10px;
`;

export const ListCategory = styled.div`
    background: #277695;
    border-top: 2px solid #fff;
    display: flex;
    flex-direction: column;
    padding: 15px;
`;

export const CategoryDiv = styled.div`

    margin: 0 auto;

    div {

    }
`;