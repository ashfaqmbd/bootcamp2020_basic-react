import React from 'react';

function Gate(isOpen) {
    if (isOpen) {
        return <p>open</p>            
    } else {
        return <p>closed</p>
    }
}

export default Gate;