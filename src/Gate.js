import React from 'react';

function Gate(isOpen) {
    if (isOpen) {
        return <a>open</a>            
    } else {
        return <a>closed</a>
    }
}

export default Gate;