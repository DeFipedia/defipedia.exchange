import React from 'react'

const ValueInput = (props) => {

    const {value, increaseValue, decreaseValue, validateInput} = props

    return(
        <div className='value-input'>
            <button onClick={decreaseValue}>-</button>
            <input type='number' value={value} onChange={validateInput()}/>                
            <button onClick={increaseValue}>+</button>
        </div>
    )
}

export default ValueInput