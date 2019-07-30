import React from 'react';

import { 
    SummaryBackground,
    SummaryWrapper,
    SummaryItemContainer, 
    TextWrapper,
    H1,H5,H6,
} from './style2';

export default function Summary(props) {
    const {summaryText} = props;
    return (
        <SummaryBackground>
            <SummaryWrapper>
                <SummaryItem quantum={10} goal='ODDANYCH WORKÓW' descript={summaryText}/>
                <SummaryItem quantum={5} goal='WSPARTYCH ORGANIZACJI' descript={summaryText}/>
                <SummaryItem quantum={7} goal='ZORGANIZOWANYC ZBIÓREK' descript={summaryText}/>
            </SummaryWrapper>
        </SummaryBackground>
    )
}

function SummaryItem(props) {
const {quantum, goal, descript} = props;
    return (
        <SummaryItemContainer>
            <H1>{quantum}</H1>
            <H5>{goal}</H5>
            <TextWrapper>
                <H6>{descript}</H6>
            </TextWrapper>
        </SummaryItemContainer>
    )
}