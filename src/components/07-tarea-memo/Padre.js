import React, { useCallback, useState } from 'react';
import '../02-useEffect/effect.css'
import { Hijo } from './Hijo';

export const Padre = () => {
  
  const [total, setTotal] = useState(0);
  const numeros = [2,4,6,8,10];

/*   const incrementar = (numero) => {
    setTotal(total + numero)
  } */
  
  const incrementar = useCallback((numero) => {
    setTotal( t => t + numero);
  }, [setTotal]);

  return <div>
    <h1>Padre</h1>
    <h3>Total: {total}</h3>
    <hr/>
    <div>
      {
        numeros.map( (numero, i) => {
          return (
            <Hijo 
              key={i}
              numero={numero}
              incrementar={incrementar}
              // incrementar={() => {
              //   incrementar(numero)
              // }}
            />
          )
        })
      }
    </div>
  </div>;
};
