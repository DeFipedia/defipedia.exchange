import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'


const Navbar = (props) => {
    let {brandTitle, brandLogo, navOptions} = props
    return(
        <AppBar position='fixed' color='bg'>
            <Toolbar>
                <img alt='brand-logo' src={brandLogo}/>
                <Typography variant='h7' color='text'>
                    {brandTitle}
                </Typography>
                <nav className='nav-options'>
                    {navOptions && navOptions.map(option => (
                        <Button variant='contained' color='primary'>{option}</Button>
                    ))}
                </nav>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar