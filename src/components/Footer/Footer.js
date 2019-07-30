import React from 'react';
// import Button from './Button';

import { 
    FooterBackground,
    FooterWrapper, 
    FooterArticleContainer,
    FooterInputContainer,
    H3, H6, FooterIconsContainer,
    Icon,
} from './style6';

export default function Footer(props) {
    const {variable} = props;
    return (
        <FooterBackground>
            <FooterWrapper>
                <FooterCopyright text='Copyright 2015 &copy; by Anna Dadej'/>
                <FooterArticleContainer>
                    <H3>Skontaktuj się z nami</H3>
                    <FooterInputContainer>
                        <FooterInput />
                    </FooterInputContainer>
                    <FooterIcons />
                </FooterArticleContainer>
            </FooterWrapper>
        </FooterBackground>
    )
}

function FooterInput(props) {
const {variable} = props;
    return (
        <>
            Input
        </>
    )
}
function FooterCopyright(props) {
const {text} = props;
    return (
        <H6> {text} </H6>
    )
}
function FooterIcons(props) {
const {text} = props;
    return (
        <FooterIconsContainer>
            <Icon primary/>
            <Icon />
        </FooterIconsContainer>
    )
}