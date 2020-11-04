import React, {useState} from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core'


const Navbar = (props) => {
    let {brandTitle, brandLogo, accountAddr, connectWallet} = props

    return(
        <AppBar position='fixed' color='inherit' elevation={0} >
            <Toolbar>
                <section className='brand-header'>   
                    <img className='brand-logo' alt='brand-logo' src={brandLogo}/>
                    {/* this was text earlier but later changed into asset */}
                    <img alt='brand-title' className='brand-title' src={brandTitle} />
                </section>
                <nav className='nav-options'>
                    <Button variant='outlined' color='secondary'>None Redeemed</Button>
                    {accountAddr != null 
                        ? <Button variant='outlined'>Connected</Button>
                        : <Button variant='outlined' onClick={connectWallet}>Connect Wallet</Button>
                    }
                </nav>
            </Toolbar>
        </AppBar >
    )
}

export default Navbar