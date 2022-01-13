import React, {useState} from 'react';

export const useCounter = (initialState = 1) => {
    
    const [counter, setCounter] = useState(initialState)

    const increment = (factor) => {
        setCounter(counter + factor)
    }
    
    const decrement = () => {
        setCounter(counter - 1)
    }

    const reset = () => {
        setCounter(initialState)
    }

    return {
        counter,
        increment,
        decrement,
        reset
    }
}
