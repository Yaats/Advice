import React, { useState, useEffect } from 'react';
import Advice from './Advice'
import RandomButton from './RandomButton';
import './App.css';

const App = () => {

    const [advice, setAdvice] = useState('')

    useEffect(() => {
        getAdvice();
    })

    const getAdvice = async () => {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        setAdvice(data.slip.advice)
    }

    const getRandomAdvice = (e) => {
        e.preventDefault();
        getAdvice();
    }



    return (
        <div className='app-container'>
            <div>
                <form onSubmit={getRandomAdvice} className='random-btn'>
                    <RandomButton />
                </form>
            </div>
            <div className='container ui advice-container'>
                <div className='ui segment piled advice'>
                    <h1><Advice quote={advice} /></h1>
                </div>
            </div>
        </div>
    )
}

export default App;