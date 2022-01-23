import React, { useCallback, useEffect, useMemo, useState } from 'react';
import '../02-useEffect/effect.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter(counter + 1)
  // }

  // useCallback se usa cuando queremos ejecutar una tarea y memorizar una version de tal tarea para pasarla como argumento y que React sepa que la funcion no cambio si no cambio alguna de sus dependencias
  const increment = useCallback((num) => {
    setCounter(c => c + num)
  }, [setCounter]);
  
  // Tambien es conveniente usarlo en los efectos, cuando la dependencia cambie y no se necesite lanzar de nuevo el efecto
  useEffect(() => {
    // ???    
  }, [increment]);
  

  return (
      <>
        <h1>CallbackHook</h1>
        <hr/>
        <h3>Counter: <small>{counter}</small></h3>
        <ShowIncrement increment={increment} />
      </>
  )
};
