import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import Button from './Button';

import { 
    HeaderWrapper, 
    NavUpContainer, 
    NavDownContainer,
    MenuListStyle,
    Li, H3,
    ButtonContainer,
    TextWrapper
} from './style1';


export default function Header(props) {
    const {variable} = props;
    return (
        <HeaderWrapper>
            <NavUpContainer>    
                <MenuLog />
                <MenuMain />    
            </NavUpContainer>
            <NavDownContainer>
                <TextDecor />
                <ButtonContainer >
                    <Button title='ODDAJ RZECZY'/>
                    <Button title='ZORGANIZUJ ZRBIÓRKĘ'/>
                </ButtonContainer>
            </NavDownContainer>
        </HeaderWrapper>
    )
}

function MenuLog(props) {
const {variable} = props;
    return (
        <MenuListStyle>
            <Li>Zaloguj</Li>
            <Li>Załóż konto</Li>
        </MenuListStyle>
    )
}

function MenuMain() {

// scrollToTop = () => {
//     scroll.scrollToTop();
// }
    return (
        <MenuListStyle>
            <Li secMenu>
                <Link
                    activeClass="active"
                    to="header"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={700}
                >
                    Start
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    activeClass="active"
                    to="summary"
                    spy={true}
                    smooth={true}
                    offset={-250}
                    duration={700}
                >
                    O co chodzi?
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-150}
                    duration={700}
                >
                    O nas
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    activeClass="active"
                    to="info"
                    spy={true}
                    smooth={true}
                    offset={-120}
                    duration={700}
                >
                    Fundacje i organizacje
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-20}
                    duration={700}
                >
                    Kontakt
                </Link>
            </Li>
        </MenuListStyle>
    )
}

function TextDecor(props) {
const {variable} = props;
    return (
        <TextWrapper>
            <H3>
                Zacznij pomagać! <br />
                Oddaj niechciane rzeczy w zaufane ręce
            </H3>
        </TextWrapper>
    )
}

