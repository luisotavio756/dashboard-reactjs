import React, { useState } from 'react';

import { Alert as AlertDiv } from './styles';

const Alert = (props) => {
    const [ show, setShow ] = useState(true);

    function toggle() {
        setShow(!show);

        if(props.toggle) {
            props.toggle(props.valueToggle);
        }
    }

    return show ? (
        // {props}
        <AlertDiv className={props.className}>
            <p>{ props.text }</p>
            <button onClick={toggle}>&times;</button>
        </AlertDiv>
    ) : null;
}

export default Alert;
