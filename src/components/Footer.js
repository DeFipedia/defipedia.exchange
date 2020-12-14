import React from 'react'
import {Button, useTheme} from '@material-ui/core'
import MailchimpSubscribe from "react-mailchimp-subscribe"

const SimpleForm = () => <MailchimpSubscribe url={process.env.REACT_APP_MAILCHIMP_URL}/>

export const Footer = () => {
    //for getting theme pallete
    const theme = useTheme()

    return(
        <footer>
            <p>Don't miss out, keep pace with all the latest</p>
            <span>
                {/* <input placeholder='Add an email address' /> */}
                <MailchimpSubscribe 
                    url={process.env.REACT_APP_MAILCHIMP_URL}
                    render={({subscribe}) => (
                        <div className='mailChimp-subscribe-form'>
                            <SimpleForm onSubmitted={formData => subscribe(formData)} />
                            {/* <input placeholder='Add an email address' />
                            {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
                            {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
                            <Button 
                                variant='outlined' 
                                style={{color: theme.palette.background.main}}
                                onClick={formData => subscribe(formData)}
                            >
                            Subscribe
                            </Button> */}
                        </div>
                    )}
                />
                {/* this is MUI button, not the custom one */}
                {/* <Button variant='outlined' style={{color: theme.palette.background.main}}>Subscribe</Button> */}
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