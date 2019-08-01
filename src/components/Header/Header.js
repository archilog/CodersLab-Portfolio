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

    const options = {
        activeClass : "active",
        spy: true,
        smooth: true,
        offset: 0,
        duration: 700
    }
    return (
        <MenuListStyle>
            <Li secMenu>
                <Link
                    to="header"
                    {...options}
                >
                    Start
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    to="summary"
                    {...options}
                >
                    O co chodzi?
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    to="about"
                    {...options}
                >
                    O nas
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    to="info"
                    {...options}
                >
                    Fundacje i organizacje
                </Link>
            </Li>
            <Li secMenu>
                <Link
                    to="contact"
                    {...options}
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

