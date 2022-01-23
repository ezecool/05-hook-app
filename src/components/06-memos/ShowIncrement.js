import React, {memo} from 'react';

export const ShowIncrement = memo(({increment}) => {
  
  console.log('Me volvi a llamar :(');

  return <div>
    <button
      className='btn btn-primary'
      onClick={() => increment(5)}
    >
      +1
    </button>
  </div>;
})
