import React from 'react';

import { 
    ButtonStyle
} from './style3';

export default function Button(props) {
    const {title} = props;
        return (
            <ButtonStyle>
                {title}
            </ButtonStyle>
        )
    }