import React, { useState, useEffect } from 'react';
import Advice from './Advice'
import RandomButton from './RandomButton';

const App = () => {

    const [advice, setAdvice] = useState('')

    useEffect(() => {
        getAdvice();
    })

    const getAdvice = async () => {
        const response = await fetch(`https://api.adviceslip.com/advice`);
        const data = await response.json();
        setAdvice(data.slip.advice)
        console.log(data.slip.advice);
    }

    const getRandomAdvice = (e) => {
        e.preventDefault();
        getAdvice();
    }



    return (
        <div className='ui segment container piled'>
            <form onSubmit={getRandomAdvice}>
                <RandomButton />
            </form>
            <Advice quote={advice} />
        </div>
    )
}

export default App;