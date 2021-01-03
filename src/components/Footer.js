import React, {useState} from 'react'
import { subscribeToNewsletter } from '../functions/subscribeToNewletter'
import {Button} from './Button'
import {a} from 'react-router-dom'

export const Footer = () => {

    const [email, setEmail] = useState('')

    const handleInputChange = (e) => {
        let {value} = e.target
        setEmail(value)
    }

    const submitEmail = async () => {
        subscribeToNewsletter(email)
    }

    return(
        <footer>
            <p>Don't miss out, keep pace with all the latest</p>
            <span>
                <input placeholder='Add an email address' type='text' value={email} onChange={(e) => handleInputChange(e)} />
                {/* this is MUI button, not the custom one */}
                <Button label='Subscribe' variant='outlined' size='small' onClick={submitEmail}/>
                <a href='https://discord.com/invite/vNBe7CC' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-discord'></i>
                </a>
                <a href='https://twitter.com/defipedia?s=21' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-twitter-square'></i>
                </a>
                <a href='https://www.linkedin.com/company/69458766' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-linkedin'></i>
                </a>
                <a href='https://github.com/DeFipedia' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-github-square'></i>
                </a>
                <a href='https://t.me/defiped' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-telegram'></i>
                </a>
                <a href='https://web3wiki.medium.com/' target='_blank' rel='noopener noreferrer'>
                    <i className='fab fa-medium'></i>
                </a>
            </span>
        </footer>
    )
}