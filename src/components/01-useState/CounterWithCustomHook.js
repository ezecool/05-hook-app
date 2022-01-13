import React from 'react';
import './counter.css';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();

    return (
        <div>
            <h1>Counter with Hook: {state}</h1>
            <hr/>
            <button onClick={() => increment()} className='btn btn-primary'>+1</button>
            <button onClick={reset} className='btn btn-secondary'>Reset counter</button>
            <button onClick={() => decrement()} className='btn btn-primary'>-1</button>
            
        </div>
    )
}
