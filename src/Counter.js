import React from 'react'
import { useState } from 'react'
import './index.css'

var beyondZero = false;
export const Counter = () => {
    const[count, setCounter] = useState(0);
    const[btnName, setBtnName] =  useState("Go Beyond 0");
    const increaseValue = () =>
    {
        setCounter(count + 1);
    }
    const decreaseValue = () =>
    {
        if(beyondZero == false)
        {
            if(count >= 1)
            {
                setCounter(count - 1);                
            }
        }
        else
        {
            setCounter(count - 1);
        }
    }
    const beyond = () => {
        if(beyondZero == false)
        {
            beyondZero = true;
            setBtnName("No Beyond 0")
        }
        else
        {
            beyondZero = false;
            setCounter(0);
            setBtnName("Go Beyond 0")
        }
    }
  return (
    <>
    <div className='container'>
        <div className='box'>
            <p className='Counter'>{count}</p>
            <button onClick={increaseValue}>+</button>
            <button onClick={decreaseValue}>-</button>
            <button onClick={beyond}>{btnName}</button>
        </div>
    </div>
    </>

  )
}
