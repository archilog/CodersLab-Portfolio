import styled from 'styled-components';
import { wrapperWidth, H3_fontSize, H6_fontSize,FooterIconSize } from '../../components/GlobalStyle'
import Ornament from '../../images/ornament.png';
import FooterImage from './form-bg.jpg';
import Instagram from './insta.png';
import Facebook from './fb.png';

export const FooterBackground = styled.div`
    height: 580px;
    background: #f3f3f3 repeat-x;
`;
export const FooterWrapper = styled.section`
    width: ${wrapperWidth};
    height: 580px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    background: url(${FooterImage}) no-repeat;
    background-size: 100% auto;
    background-position: -45%;
`;
export const H6 = styled.h6`
    width: 15%;
    font-size: ${H6_fontSize};
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    padding: 15px 5px;
`;
export const FooterArticleContainer = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* border: 1px solid blue;     */
`;
export const H3 = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${H3_fontSize};
    padding-top: 50px;
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
export const FooterInputContainer = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    border: 1px solid blue;
`;
export const FooterIconsContainer = styled.div`
    height: 10%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: relative;
    /* padding: 15px 5px; */
    /* border: 1px solid blue; */
`;
export const Icon = styled.div`
    width: ${FooterIconSize};
    height: ${FooterIconSize};
    position: absolute;
    right: ${ props=>props.primary ? '85px': '120px'};
    background: url( 
        ${ props=>props.primary ? `${Facebook}`: `${Instagram}`} 
        ) no-repeat center/contain;
`;