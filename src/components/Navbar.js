import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core'


const Navbar = (props) => {
    let {brandTitle, brandLogo, navOptions} = props
    return(
        <AppBar position='fixed' color='bg' elevation={0} >
            <Toolbar>
                <img alt='brand-logo' src={brandLogo}/>
                <Typography variant='h7' color='text'  style={{ flex: 1 }}>
                    {brandTitle}
                </Typography>
                <nav className='nav-options'>
                    {navOptions && navOptions.map(option => (
                        <Button variant='outlined' color='secondary'>{option}</Button>
                    ))}
                </nav>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar