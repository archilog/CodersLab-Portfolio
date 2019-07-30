import React from 'react';

import { 
    ButtonStyle
} from './style6.js';

export default function Button(props) {
    const {title} = props;
        return (
            <ButtonStyle>
                {title}
            </ButtonStyle>
        )
    }