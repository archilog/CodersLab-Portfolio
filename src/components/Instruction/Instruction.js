import React from 'react';

import Button from './Button';

import { 
    InstructionWrapper,
    InstructionContainer,
    H3,H5,H6,
    InstructionMenu,
    InstructionItemContainer,
} from './style3';

export default function Instruction(props) {
    const {exampleText} = props;
    return (
        <InstructionWrapper>
            <InstructionContainer>
                <H3>Wystarczą 4 proste kroki</H3>
                <InstructionMenu>
                    <InstructionItems textUp='Wybierz rzeczy' textDown='ubrania, zabawki, sprzęt i inne'/>
                    <InstructionItems textUp='Spakuj je' textDown='skorzystaj z worków na śmieci'/>
                    <InstructionItems textUp='Zdecyduj komu chcesz pomóc' textDown='wybierz zaufane miejsca'/>
                    <InstructionItems textUp='Zamów kuriera' textDown='kurier przyjedzie w dogodnym terminie'/>
                </InstructionMenu>
                <Button title='ZAŁÓŻ KONTO'/>
            </InstructionContainer>
        </InstructionWrapper>
    )
}

function InstructionItems(props) {
const {textUp, textDown} = props;

    return (
        <InstructionItemContainer>
        <H5>{textUp}</H5>
        <H6>{textDown}</H6>
        </InstructionItemContainer>
    )
}