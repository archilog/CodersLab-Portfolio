import styled from 'styled-components';
import { wrapperWidth, H3_fontSize, H4_fontSize } from '../../components/GlobalStyle'
import AboutImage from './about.png';
import Ornament from '../../images/ornament.png';
import Signature from './signature.png';

export const AboutBackground = styled.div`
    height: 500px;
    background: lightgray repeat-x;
`;
export const AboutWrapper = styled.section.attrs({
    id: 'about'
})`
    width: ${wrapperWidth};
    height: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: 1px solid green; */
`;
export const AboutImgContainer = styled.div`
    height: 90%;
    width: 55%;
    background: url(${AboutImage}) no-repeat center/cover;
`;
export const AboutArticleContainer = styled.div`
    height: 100%;
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;    
`;
export const H3 = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${H3_fontSize};
    padding: 10px 10px;
    /* border: 1px solid red; */
    &::after {
        width:180px;
        height: 20px;
        margin: 10px auto;
        background: url(${Ornament}) no-repeat center/cover;
        content: '';
        display: block;
    }
`;
export const H4 = styled.h4`
    display: flex;
    flex-direction: column;
    text-align: center;
    line-height: 35px;
    font-size: ${H4_fontSize};
    padding: 10px 75px;
    /* border: 1px solid red; */
    &::after {
        width: 100px;
        height: 100px;
        margin-left: 75%;
        background: url(${Signature}) no-repeat right/contain;
        content: '';
        display: block;
    }
`;
