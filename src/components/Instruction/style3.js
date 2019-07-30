import styled from 'styled-components';

import { wrapperWidth, H6_fontSize, H5_fontSize, H4_fontSize } from '../../components/GlobalStyle'

import Ornament from '../../images/ornament.png';
import Pack from './pack.png';
import Select from './select.jpg';
import Order from './orderCourier.png';
import Help from './whoHelps.png';

// used in Instruction component
export const InstructionWrapper = styled.section`
    width: ${wrapperWidth};
    height: 450px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    /* border: 1px solid gray; */
`;
export const InstructionContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 5px 0;
    /* border: 1px solid red; */
`;
export const InstructionMenu = styled.div`
    width: 100%;
    height: 45%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: lightgray;
    /* border: 1px solid blue; */
`;
export const ButtonStyle= styled.button`
    width: 180px;
    height: 80px;
    font-size: ${H4_fontSize};
    background-color: white;
    border: 1px solid gray;
    &:hover {
        background: lightgray;
    }
`;
export const H3 = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    padding: 10px 10px;
    /* border: 1px solid red; */
    &:after {
        width:180px;
        height: 20px;
        margin: 10px auto;
        background: url(${Ornament}) no-repeat center/cover;
        content: '';
        display: block;
    }
`;
export const InstructionItemContainer = styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* border: 1px solid green; */
`;
export const H5 = styled.h5`
    text-align: center;
    font-size: ${H5_fontSize};
    padding: 10px 10px;
    &::before {
        width:50px;
        height: 50px;
        margin: 10px auto;
        background: url(${Pack}) no-repeat center/cover;
        content: '';
        display: block;
    }
`;
export const H6 = styled.h6`
    text-align: center;
    font-size: ${H6_fontSize};
    line-height: 18px;
`;