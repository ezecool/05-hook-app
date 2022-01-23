import React from 'react';

export const Hijo = React.memo(({numero, incrementar}) => {

  console.log('Me llame otra vez...');

    return (
        <button
            className="btn btn-primary mr-3"
            //onClick={incrementar}
            onClick={ () => incrementar( numero ) }
        >
            { numero }
        </button>
    )
});
