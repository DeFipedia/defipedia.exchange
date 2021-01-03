import React, {useState} from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import {Button} from '../components/Button'
import { subscribeToNewsletter } from '../functions/subscribeToNewletter'

const SwipeableFooter = () => {

    const [email, setEmail] = useState('')

    const handleInputChange = (e) => {
        let {value} = e.target
        setEmail(value)
    }

    const submitEmail = async () => {
        subscribeToNewsletter(email)
    }
    return(
        <SwipeableBottomSheet overflowHeight={60}>
            <div className='swipeable-footer' style={{ height: '285px' }}>
                <div className='nugget'></div>
                <p>Don't miss out, keep pace with all the latest</p>
                <section className='subscribe-section'>
                    <input placeholder='Add an email address' value={email} onChange={(e) => handleInputChange(e)} required/>
                    <Button variant='outlined' size='medium' onClick={submitEmail}>Subscribe</Button>         
                </section>
                <section className='social-media-handle'>
                    <i className="fab fa-discord"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github-square"></i>
                    <i className="fab fa-telegram"></i>
                    <i className="fab fa-medium"></i>
                </section>
            </div>
        </SwipeableBottomSheet>
    )
}

export default SwipeableFooter