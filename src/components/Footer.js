import React from 'react'
import {Button, useTheme} from '@material-ui/core'

export const Footer = () => {
    //for getting theme pallete
    const theme = useTheme()

    return(
        <footer>
            <p>Don't miss out, keep pace with all the latest</p>
            <span>
                <input placeholder='Add an email address' />
                {/* this is MUI button, not the custom one */}
                <div className='right'>
                    <Button variant='outlined' style={{color: theme.palette.background.main}}>Subscribe</Button>
                    <section className='social-media-handle'>
                        <i class="fab fa-discord"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github-square"></i>
                        <i class="fab fa-telegram"></i>
                        <i class="fab fa-medium"></i>
                    </section>
                </div>
            </span>
        </footer>
    )
}