import React from 'react';

import { 
    ButtonStyle
} from './style1';

export default function Button(props) {
    const {title} = props;
        return (
            <ButtonStyle>
                {title}
            </ButtonStyle>
        )
    }