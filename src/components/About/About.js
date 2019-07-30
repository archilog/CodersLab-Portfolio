import React from 'react';

import { 
    AboutBackground,
    AboutWrapper,
    AboutImgContainer,
    AboutArticleContainer,
    H3,H4,
} from './style4';

export default function About(props) {
    const {aboutText} = props;
    return (
        <AboutBackground>
            <AboutWrapper>
                <AboutText title='O nas' descript={aboutText}/>
                <AboutImgContainer />
            </AboutWrapper>
        </AboutBackground>
    )
}

function AboutText(props) {
    const {title,descript} = props;
    return (
        <AboutArticleContainer>
            <H3>{title}</H3>
            <H4>{descript}</H4>
        </AboutArticleContainer>
    )
}