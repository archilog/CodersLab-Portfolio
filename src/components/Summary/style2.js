import styled from 'styled-components';

import SummaryBg from './Bg.jpg';
import { wrapperWidth, H1_fontSize, H5_fontSize, H6_fontSize } from '../../components/GlobalStyle'

// used in Summary component
export const SummaryBackground = styled.div`
    height: 240px;
    background: url(${SummaryBg}) repeat-x;
    background-size: 100% 100%;
    /* border: 1px solid red; */
`;
export const SummaryWrapper = styled.section`
    width: ${wrapperWidth};
    height: 240px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-position-y: 100%;
    /* border: 1px solid red; */
`;
export const SummaryItemContainer= styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px 0;
    /* border: 1px solid gray; */
`;
export const TextWrapper = styled.div`
    text-align: center;
`;
export const H1 = styled.h1`
    font-size: ${H1_fontSize};
    font-weight: lighter;
    padding: 10px 10px;
`;
export const H5 = styled.h5`
    font-size: ${H5_fontSize};
    padding: 10px 10px;
`;
export const H6 = styled.h6`
    font-size: ${H6_fontSize};
    line-height: 18px;
`;