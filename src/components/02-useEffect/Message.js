import React, {useEffect, useState} from 'react';

export const Message = () => {
    
    const [coordenadas, setCoordenadas] = useState({x: 0, y: 0});

    useEffect(() => {

        const mouseMove = (e) => {
            const coords = {x: e.x, y: e.y}
            setCoordenadas(coords)
        }

        window.addEventListener('mousemove', mouseMove)

        console.log('Componente montado')
        return () => {
            console.log('Componente desmontado')
            //window.removeEventListener('mousemove', mouseMove)
        }
    }, [])

    return (
        <div>
            <h1>Saludos</h1>
            <p>X: {coordenadas.x}</p>
            <p>X: {coordenadas.y}</p>
        </div>
    )
}
