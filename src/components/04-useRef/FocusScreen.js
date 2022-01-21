import React, {useRef} from 'react'
import '../02-useEffect/effect.css'
export const FocusScreen = () => {

    const inputRef = useRef()
    console.log(inputRef);

    const handleClick = () => {
        // document.querySelector('input').select();
        inputRef.current.select();
    }

    return (
        <div>
            <h1>FocusScreen!!!</h1>
            <hr/>
            
            <input
                ref={inputRef}
                type="text"
                className="form-control"
                placeholder='Su nombre'
            />
            
            <button
                className="btn btn-primary mt-3"
                onClick={handleClick}
            >
                Focus
            </button>
        </div>
    )
}
