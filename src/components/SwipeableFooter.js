import React, {useState} from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import {Button} from '../components/Button'
import { subscribeToNewsletter } from '../functions/subscribeToNewletter'

const SwipeableFooter = () => {

    const [email, setEmail] = useState('')

    const [open, setOpen] = useState(false)

    const [emailSubmitted, setEmailSubmitted ] = useState(false)

    const handleInputChange = (e) => {
        let {value} = e.target
        setEmail(value)
    }

    const submitEmail = async () => {
        if(email !== ''){
            await subscribeToNewsletter(email)
            setEmailSubmitted(true)
        }
    }

    const toggleSwipeableView = () => {
        setOpen(!open)
    }

    // if(emailSubmitted) {
    //     return <p>thitititititititit</p>
    // }
    return(
        <SwipeableBottomSheet overflowHeight={60} open={open}>
            <div className='swipeable-footer' style={{ height: '285px' }} >
                <div className='nugget' onClick={toggleSwipeableView}></div>
                { emailSubmitted ?
                    <React.Fragment>
                        <p>Awesome! You are subscribed to our newsletter:</p>
                        <p>{email}</p>
                        <Button variant='outlined' size='medium' onClick={toggleSwipeableView}>Back to $BOOKS</Button> 
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <p>Don't miss out, keep pace with all the latest</p>
                        <section className='subscribe-section'>
                            <input placeholder='Add an email address' value={email} onChange={(e) => handleInputChange(e)} required/>
                            <Button variant='outlined' size='medium' onClick={submitEmail}>Subscribe</Button>         
                        </section>
                    </React.Fragment>
                }
                <section className='social-media-handle'>
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
                </section>
            </div>
        </SwipeableBottomSheet>
    )
}

export default SwipeableFooter