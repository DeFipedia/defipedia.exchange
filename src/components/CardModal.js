import { Modal, IconButton } from '@material-ui/core'
import React from 'react'
import CloseIcon from '@material-ui/icons/Close';
const CardModal = (props) => {

    const {open, handleClose}  = props

    return(
        <Modal
            open={open}
            aria-labelledby='dynamic pricing stats modal'
            aria-describedby='dynamic pricing stats modal'
        >
            <div className='dynamic-pricing-modal'>
                <span className='header'>
                    <p>Get Packs</p>
                    <CloseIcon style={{fill: '#FF6400'}} />
                </span>
                <section class='dynamic-pricing-modal-content'>
                    <h4>How it works:</h4>
                        <p>$BOOKS is a token that entitles you to 1 of our real, limited edition books, shipped anywhere in the world. </p>
                        <p>You can sell the token back at any time. To get a real book, redeem a $BOOKS token.</p>
                    {/* ------- */}
                    <h4>How it's priced:</h4>
                        <p>We are listing $BOOKS tokens in two locations. Uniswap and on a Dutch Auction site. </p>
                    {/* --------- */}
                    <h4>$BOOKS on <a>UniSwap</a></h4>
                        <p>Tokens on Uniswap will start at 0.3 ETH per $BOOKS. Each buy/sell on Uniswap will move the price. The increase or decrease follows a <a>bonding curve.</a></p>
                    {/* --------- */}
                    <h4>$BOOKS on Auction</h4>
                        <p>Tokens at auction will start at $1,000 USD per $BOOKS. As time passes, the listing price will decay to $200 USD. Learn more about the time based <a>price mechanism here.</a></p>
                    {/* --------------- */}
                    <p>Note: when $BOOKS on Auction sell out, you will only be able to purchase them on Uniswap.</p>
                    <p>Got any questions? <a>Get in touch.</a></p>
                </section>
            </div>
        </Modal>
    )
}

export default CardModal