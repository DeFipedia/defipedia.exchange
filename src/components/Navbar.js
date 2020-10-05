import React from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core'


const Navbar = (props) => {
    let {brandTitle, brandLogo, navOptions} = props
    return(
        <AppBar position='fixed' color='bg' elevation={0} >
            <Toolbar>
                <section className='brand-logo'>   
                    <img alt='brand-logo' src={brandLogo}/>
                    {/* this was text earlier but later changed into asset */}
                    <img alt='brand-logo' className='brand-title' src={brandTitle} />
                </section>
                <nav className='nav-options'>
                    {navOptions && navOptions.map(option => (
                        <Button variant='outlined' key={option} color='secondary'>{option}</Button>
                    ))}
                </nav>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar