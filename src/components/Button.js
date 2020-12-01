import React from 'react'

const VARIANTS = [
    'btn--primary',
    'btn-secondary',
    'btn-disabled'
]

const SIZES = [
    'btn--medium',
    'btn--small' 
]

//@DEV: this is the functional component that renders button
export const Button = ({label, onClick, variant, size}) => {

    const checkButtonVariant = VARIANTS.includes(variant) ? variant : VARIANTS[0]

    const checkButtonSizes = SIZES.includes(size) ?  size : SIZES[0]

    return(
        <button 
            onClick={onClick} 
            className={`btn ${checkButtonVariant} ${checkButtonSizes}`}
        >
            {label}
        </button>
    )
}
