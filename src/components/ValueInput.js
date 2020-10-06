import React, {useState} from 'react'

const ValueInput = (props) => {

    const {value, increaseValue, decreaseValue, validateInput} = props
    // const [value, setValue] = useState(1)

    // const increaseValue = () => {
    //     setValue(prevValue => prevValue + 1)
    // }

    // const decreaseValue = () => {
    //     setValue(prevValue => prevValue - 1)
    // }

    // const validateInput = () => {
    //     if(value > 5) {
    //         // give a alert//
    //         alert('You can not select more than 5')
    //         //set back to 5//
    //         setValue(5)
            
    //     }else if (value <= 0) {
    //         alert('Value can not be negative or zero')
    //         setValue(1)
    //     }
    // }
    return(
        <div className='value-input'>
            <button onClick={decreaseValue}>-</button>
            <input type='number' value={value} onChange={validateInput()}/>                
            <button onClick={increaseValue}>+</button>
        </div>
    )
}

export default ValueInput