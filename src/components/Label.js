import React from 'react'

export const Label = ({value, children}) => {
    return(
        <section className='label-component'>
            <p>{value ? value : children} ETH</p>
        </section>
    ) 
}
