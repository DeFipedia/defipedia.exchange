import React, {useState} from 'react'
import { subscribeToNewsletter } from '../functions/subscribeToNewletter'
import {Button} from './Button'

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
                <i className="fab fa-discord"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-linkedin"></i>
                <i className="fab fa-github-square"></i>
                <i className="fab fa-telegram"></i>
                <i className="fab fa-medium"></i>
            </span>
        </footer>
    )
}