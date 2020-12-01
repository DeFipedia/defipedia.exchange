import React from 'react'

const Button = (props) => {
    const {label} = props
    return(
        <button className='dp-button'>
            {label}
        </button>
    )
}

export default Button
