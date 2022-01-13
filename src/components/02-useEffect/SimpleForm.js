import React, {useEffect, useState} from 'react'
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(() => {
        // console.log('Hey!');
    }, []); // [] Permite ejecutar el efecto solo cuando se dibuja el componente la primera vez

    useEffect(() => {
        // console.log('formState cambio!');
    }, [formState]); // [] Permite ejecutar el efecto cuando cambia el formState

    useEffect(() => {
        // console.log('email cambio!');
    }, [email]); // [] Permite ejecutar el efecto cuando cambia email
    
    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr/>

            <div className='form-group'>
                <input 
                    type="text"
                    name='name'
                    className='form-control'
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleInputChange}
                />
            </div>

            <div className='form-group'>
                <input 
                    type="text"
                    name='email'
                    className='form-control'
                    placeholder='Tu email'
                    autoComplete='off'
                    value={email}
                    onChange={handleInputChange}
                />
            </div>

            { ( name === '123' ) && <Message/>}

        </>
    )
}
