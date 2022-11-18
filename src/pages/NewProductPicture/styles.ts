import styled, { css } from "styled-components";

type Props = {
    imgUrl: string;
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
`;

export const Label = styled.label<Props>`
    width: 300px;
    height: 300px;
    background: #277695;
    margin: 45px auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: ${props => props.imgUrl ? 'transparent' : '#fff'};
    background-image: url('${props => props.imgUrl || ''}');
    object-fit: contain;
    object-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    input {
        display: none;
    }
`;

export const Input = styled.input`
    margin-top: 15px;
    height: 40px;
    border: 0;
    border-bottom: 1px solid #ffffff;
    background: transparent;
    color: #ffffff;
`;

export const ButtonNext = styled.div`
    text-align: center;
    bottom: 0;
    border-top: 2px solid #ffffff;
    font-size: 30px;
    color: #ffffff;
    padding: 15px 10px;
`;