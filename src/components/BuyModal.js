import React from 'react';
import {Modal, Card, CardContent, Typography, CardActionArea, Button} from '@material-ui/core'
import PriceInput from './PriceInput';
const BuyModal = (props) => {

    const {open} = props
    return(
        <Modal
            open={open}
            // onClose={handleClose}
            aria-labelledby='$BOOKS Buy Modal'
            aria-describedby='$BOOKS Buy Modal'
        >
            <div className='buy-modal'>
                <Card>
                    <CardContent>
                        <Typography>Buy</Typography>
                        <img alt='$BOOK cover art' src={process.env.PUBLIC_URL +  'assets/cover-art.jpg'}/>
                        <section className='value-indicator'>
                            <div>
                                <p>3 Eth</p>
                                <p>950/950</p>
                            </div>
                            <div>
                                <PriceInput />
                            </div>
                        </section>
                    </CardContent>
                </Card>
                <div className='actions'>
                    <Button>
                        Buy Now
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default BuyModal