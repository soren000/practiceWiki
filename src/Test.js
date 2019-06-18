import React from 'react';

export default ({name, index}) => {
    return (
        <div key={index}>
            {name}
        </div>
    )
}