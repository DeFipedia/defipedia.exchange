import React, {useState} from 'react';
import {AppBar, Toolbar, Button} from '@material-ui/core'
import Web3SignIn from './Web3SignIn'

const Navbar = (props) => {
    //destructing props//
    let {brandTitle, brandLogo, accountAddr, connectWallet} = props

    // for state //
    const [open, setOpen] = useState(false)

    const showModal = () => {
        setOpen(true)
    }

    const closeWeb3SignInModal = () => {
        setOpen(false)
    }

    return(
        <div>
        <AppBar position='fixed' color='inherit' elevation={0} >
            <Toolbar>
                <section className='brand-header'>   
                    <img className='brand-logo' alt='brand-logo' src={brandLogo}/>
                    {/* this was text earlier but later changed into asset */}
                    <img alt='brand-title' className='brand-title' src={brandTitle} />
                </section>
                <nav className='nav-options'>
                    <Button variant='outlined' color='primary'>None Redeemed</Button>
                    {/* {accountAddr != null 
                        ? <Button variant='outlined'>Connected</Button>
                        : <Button variant='outlined' onClick={connectWallet}>Connect Wallet</Button>
                    } */}
                    <Button onClick={showModal} >Connect Wallet</Button>
                </nav>
            </Toolbar>
        </AppBar >
        <Web3SignIn 
            open={open}
            close={closeWeb3SignInModal}
        />
        </div>
    )
}

export default Navbar