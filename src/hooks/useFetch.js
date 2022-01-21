import React, {useState, useEffect, useRef} from 'react'

export const useFetch = (url) => {

    const isMounted = useRef(true) // Esta referencia nos permitira saber cuando el componente que utiliza otro componente esta montado

    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null
    })

    useEffect( () => {
        // Cuando el componente se desmonte, se devuelve algo
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect( () => {

        setState({data: null, loading: true, error: null})

        fetch(url)
            .then(resp => resp.json())
            .then(data => {

                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data: data
                    })
                }
/*                 setTimeout(() => {
                    if (isMounted.current) {
                        setState({
                            loading: false,
                            error: null,
                            data: data
                        })
                    } else {
                        console.log('Fallo render');
                    }
                }, 4000); */
            })
    }, [url])

    return state;
}
