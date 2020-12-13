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
                <Button variant='outlined' style={{color: theme.palette.background.main}}>Subscribe</Button>
                {/* <section className='social-media-handle'> */}
                    <i className="fab fa-discord"></i>
                    <i className="fab fa-twitter-square"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-github-square"></i>
                    <i className="fab fa-telegram"></i>
                    <i className="fab fa-medium"></i>
                {/* </section>    */}
            </span>
        </footer>
    )
}