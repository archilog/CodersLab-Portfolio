import styled from 'styled-components';

import { wrapperWidth, H3_fontSize, H4_fontSize, H5_fontSize } from '../../components/GlobalStyle'

import Ornament from '../../images/ornament.png';

// used in Instruction component
export const InfoWrapper = styled.section`
    width: ${wrapperWidth};
    height: 580px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    /* border: 1px solid gray; */
`;
export const InfoContainer = styled.div`
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    padding: 0 0;
    /* border: 1px solid red; */
`;
export const H3 = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${H3_fontSize};
    margin-top: 25px;
    &:after {
        width:180px;
        height: 20px;
        margin: 10px auto;
        background: url(${Ornament}) no-repeat center/cover;
        content: '';
        display: block;
    }
`;
export const ButtonContainer= styled.div`
    width: 45%;
    display: flex;
    justify-content: space-around;
    padding: 0;
    /* border: 1px solid blue; */
`;
export const ButtonStyle= styled.button`
    width: 180px;
    height: 80px;
    font-size: 1.1em;
    background-color: white;
    border: 1px solid white;
    &:hover {
        border: 1px solid gray;
    }
`;
export const H5 = styled.h5`
    width: 50%;
    text-align: center;
    line-height: 20px;
    font-size: ${H5_fontSize};
`;
export const InfoDataContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid orange;
`;
export const InfoNumContainer = styled.ul.attrs({
    id: 'info'
})`
    width: 10%;
    height: 5%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    /* border: 1px solid greenyellow; */
`;