import React from 'react'

const ValueInput = (props) => {

    const {value, validateInput} = props

    return(
        <div className='value-input'>
            {/* <button onClick={decreaseValue}>-</button> */}
            <input type="number" inputmode="numeric" />                
            {/* <button onClick={increaseValue}>+</button> */}
        </div>
    )
}

export default ValueInput