import React from 'react'

const VARIANTS = [
    'primary',
    'secondary',
    'default',
    'outlined',
    'disabled'
]

const SIZES = [
    'medium',
    'small' 
]

//@DEV: this is the functional component that renders button
export const Button = ({label, children, onClick, variant, size}) => {

    const checkButtonVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0]

    const checkButtonSize = SIZES.includes(size) ?  size : SIZES[0]

    return(
        <button 
            onClick={onClick} 
            className={`btn ${checkButtonVariant} ${checkButtonSize}`}
        >
            {label? label : children}
        </button>
    )
}
