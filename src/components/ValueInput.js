import React, {useState} from 'react'

const ValueInput = () => {

    const [valueInput, setValueInput] = useState(1)

    const increaseValue = () => {
        setValueInput(valueInput + 1)
    }

    const decreaseValue = () => {
        //@Notice: don't allow users to set value less than one//
        if(valueInput > 1){
            setValueInput(valueInput - 1)
        }
    }

    return(
        <div className='value-input'>
            <button onClick={decreaseValue}>-</button>
            <input value={valueInput} readOnly/>
            <button onClick={increaseValue}>+</button>
        </div>
    )
}

export default ValueInput