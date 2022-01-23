import React, {memo} from 'react';

export const Small = memo(({value}) => {
    console.log('Render Small...');
    return <small>{value}</small>
})