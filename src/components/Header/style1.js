import styled from 'styled-components';

import HeaderImg from './photo_header.jpg';
import { wrapperWidth, H3_fontSize, H4_fontSize } from '../../components/GlobalStyle'
import Ornament from '../../images/ornament.png';


// used in Header component
export const HeaderWrapper = styled.section.attrs(props => ({
    id: 'header'
}))`
    width: ${wrapperWidth};
    height: 580px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    background: url(${HeaderImg}) no-repeat;
    background-size: 70% auto;
    background-position: -45%;
    /* border: 1px solid green; */
`;
export const NavUpContainer= styled.nav`
    width: 45%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 20px;
    right: 130px;
    /* border: 1px solid red; */
`;
export const NavDownContainer= styled.nav`
    width: 40%;
    height: 250px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 240px;
    right: 80px;
    padding: 5px 0;
    /* border: 1px solid green; */
`;
export const MenuListStyle= styled.ul`
    display: flex;
    justify-content: flex-end;
    padding: 5px;
`;
export const Li = styled.li`
    border: 1px solid white;
    padding: 5px ${props=>props.secMenu?'10px':'5px'};
    &:hover {
        border: 1px solid gray;
    }
`;
export const ButtonContainer= styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 5px 0;
    /* border: 1px solid gray; */
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
export const TextWrapper = styled.div`
    text-align: center;
`;
export const H3 = styled.h3`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 35px;
    font-size: ${H3_fontSize};
    padding: 5px 0;
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