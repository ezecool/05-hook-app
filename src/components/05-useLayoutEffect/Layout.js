import React from 'react';
import './styles.css';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';

export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)
    const { author, quote } = !!data && data[0]

    return (
        <div>
            <h1>Frases de Breaking Bad</h1>
            <hr />

            {
                loading
                    ?
                    (
                        <div className='alert alert-info text-center'>
                            Loading...
                        </div>
                    )
                    :
                    (
                        <>
                            <blockquote className="blockquote text-right">
                                <p>{quote}</p>
                                <footer className="blockquote-footer">{author}</footer>
                            </blockquote>
                            <button className="btn btn-primary" onClick={() => increment(1)}>
                                Next quote
                            </button>
                        </>
                    )
            }


        </div>
    )
}
