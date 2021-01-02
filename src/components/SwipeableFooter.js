import React from 'react'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
import {Button} from '../components/Button'

const SwipeableFooter = () => {
    return(
        <SwipeableBottomSheet overflowHeight={60}>
            <div className='swipeable-footer' style={{ height: '285px' }}>
                <div className='nugget'></div>
                <p>Don't miss out, keep pace with all the latest</p>
                <section className='subscribe-section'>
                    <input placeholder='Add an email address' />
                    <Button variant='outlined' size='medium'>Subscribe</Button>         
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