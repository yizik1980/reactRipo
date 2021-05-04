import React, { useState,useRef, useEffect } from 'react';
import './main.css';

function MainView() {
    const [city, setCity] = useState('new York');
    const textInput = useRef('');
    setCity('');
    useEffect(() => {
        debugger;
        textInput.current.value = city;
        textInput.current.focus();
    });
    function clicktoCheck() {
        console.log(arguments, this);
    }
    return ( 
            <div className="dialogBox">
                <h2>{city}</h2>
                <input ref={textInput} type="text" placeholder="tell us the rest" />
                <div>
                    <button type="button" onClick={clicktoCheck()}>check</button>
                </div>
            </div>
        );
}

export default MainView;