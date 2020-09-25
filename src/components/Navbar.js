import React from 'react';
import {AppBar, Toolbar, Typography} from '@material-ui/core'


const Navbar = (props) => {
    let {brandTitle} = props
    return(
        <AppBar position='fixed' >
            <Toolbar>
                <Typography variant='h6'>
                    {brandTitle}
                </Typography>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar