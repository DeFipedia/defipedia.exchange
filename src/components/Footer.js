import React, {useState} from 'react'
import {subscribeToNewsletter}  from '../functions/subscribeToNewsletter'
import {Button} from './Button'
import AlertMessage from './AlertMessage'

export const Footer = () => {

    const [email, setEmail] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [msg, setMsg] = useState(null)


    const handleInputChange = (e) => {
        let {value} = e.target
        setEmail(value)
    }

    const handleAlertClose = () => {
        setShowAlert(false)
    }

    const submitEmail = async () => {
        let subscribed = await subscribeToNewsletter(email)
        if(subscribed === true){
            let alertMessage = 'Successfully subscribed to the newsletter'
            setMsg(alertMessage)
            setShowAlert(true)
        }
        
    }

    return(
        <React.Fragment>
            {showAlert ? <AlertMessage open={alert}  handleClose={handleAlertClose} msg={msg} type='success'/> : null}
        <footer>
            <p>Don't miss out, keep pace with all the latest</p>
            <span>
            <input placeholder='Add an email address' type='text' value={email} required onChange={(e) => handleInputChange(e)} />
                {/* this is MUI button, not the custom one */}
                <Button label='Subscribe' variant={email.length > 0 ? 'outlined' : 'outlined-disabled'} size='small' onClick={submitEmail}/>
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
        </React.Fragment>
    )
}