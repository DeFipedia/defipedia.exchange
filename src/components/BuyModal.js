import React from 'react';
import {Modal, Card, CardContent, Typography, CardActionArea, Button} from '@material-ui/core'
import ValueInput from './ValueInput';
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
                        <Typography variant='h4'>Buy</Typography>
                        <img alt='$BOOK cover art' src={process.env.PUBLIC_URL +  'assets/cover-art.jpg'}/>
                        <section className='data-indicator'>
                            <div className='token-data'>
                                <p>3 Eth</p>
                                <p>950/950 available</p>
                            </div>
                            <div className='unit-indicator'>
                                <ValueInput />
                            </div>
                        </section>
                    </CardContent>
                </Card>
                <div className='actions'>
                    <Button className='buy-button'>
                        Buy Now
                    </Button>
                    <Button className='cancel-button'>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    )
}

export default BuyModal