import { Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import Web3SignIn from './Web3SignIn'

function Navbar() {
    return(
       <Flex height='75px' align='center' px='2%'>
            <img className='brand-logo' alt='brand-logo' src={process.env.PUBLIC_URL + 'assets/dfp-logo.svg'} />
            <img alt='brand-title' className='brand-title' src={process.env.PUBLIC_URL + 'assets/brand-title.svg'} />
            <Spacer />
                <Button variant='outlined' colorScheme='primary' size='sm'>None Redeemed</Button>
                <Web3SignIn />
       </Flex> 
    )
    
}

export default Navbar// import React, {useState} from 'react';
// import {AppBar, Toolbar, Button} from '@material-ui/core'
// import Web3SignIn from './Web3SignIn'

// const Navbar = (props) => {
//     //destructing props//
//     let {brandTitle, brandLogo, wallet} = props

//     // for state //
//     const [open, setOpen] = useState(false)

//     const showModal = () => {
//         setOpen(true)
//     }

//     const closeWeb3SignInModal = () => {
//         setOpen(false)
//     }

//     const disconeectWallet = () => {
//         wallet.reset()
//     }

//     return(
//         <div>
//         <AppBar position='fixed' color='inherit' elevation={0} >
//             <Toolbar>
//                 <section className='brand-header'>   
//                     <img className='brand-logo' alt='brand-logo' src={process.env.PUBLIC_URL + 'assets/dfp-logo.svg'} />
//                     {/* this was text earlier but later changed into asset */}
//                     <img alt='brand-title' className='brand-title' src={brandTitle} />
//                 </section>
//                 <nav className='nav-options'>
//                     <Button variant='outlined' color='primary'>None Redeemed</Button>
//                     {wallet.account != null 
//                         ? <Button onClick={disconeectWallet}>Disconnect</Button>
//                         : <Button onClick={showModal}>Connect Wallet</Button>
//                     }
//                 </nav>
//             </Toolbar>
//         </AppBar >
//         <Web3SignIn 
//             open={open}
//             close={closeWeb3SignInModal}
//             wallet={wallet}
//             closeWeb3SignInModal={closeWeb3SignInModal}
//         />
//         </div>
//     )
// }

// export default Navbar