import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';

import Button from './Button';

import { 
    InfoWrapper,
    InfoContainer,
    H3,H5,
    ButtonContainer,
    InfoDataContainer,
    InfoNumContainer,
} from './style5';

export default function Info(props) {



const {infoText} = props;

    return (
        <InfoWrapper>
            <InfoContainer>
                <H3>Komu pomagamy?</H3>
                <ButtonContainer>
                    <Button title='Fundacjom' />
                    <Button title='Organizacjom pozarządowym' />
                    <Button title='Lokalnym zbiórkom' />
                </ButtonContainer>
                <H5>{infoText}</H5>
                <InfoDataContainer>
                    <InfoData />
                </InfoDataContainer>
                    <InfoNum />
            </InfoContainer>
        </InfoWrapper>
    )
}

function InfoData(props) {
const {variable} = props;
    return (
        <ul>
            <li>slkflksd</li>
            <li>slkflksd</li>
            <li>slkflksd</li>
        </ul>
    )
}
function InfoNum(props) {
    const {variable} = props;
        return (
            <InfoNumContainer>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </InfoNumContainer>
        )
    }