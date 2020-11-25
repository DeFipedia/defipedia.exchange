import React, {useState} from 'react'
import {useTheme, Card, CardContent} from '@material-ui/core'
import CardModal from './CardModal'

const AuctionCard = (props) => {
    //props for card data//
    let {title, image, price} = props
    //for theme//
    const theme = useTheme()
    //for state //
    const [modalOpen, setModalOpen] = useState(false)
    //methods for pricing mechanism modal //
    const showDynamicPricingStatModal = () => {
        setModalOpen(true)
    }

    const closeDynamicPricingModal = () => {
        setModalOpen(false)
    }

    return(
        <React.Fragment>
            {/* @DEV: this renders the modal when 'learn more' is clicked */}
            <CardModal open={modalOpen} handleClose={closeDynamicPricingModal} />
            {/* @DEV: this actually renders the card */}
            <div className='card-panel'>
                <Card>
                    <CardContent>
                        <span className='card-header'>
                            <div className='card-title'>
                                <h3>$BOOKS on </h3> <h3 style={{color: theme.palette.primary.main}}>{title}</h3>
                            </div>
                        </span>
                        <p>2020 DeFi Packs</p>  
                        <img alt='cover-art' src={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}/>  
                        <section className='card-data'>
                            <h4>{price} ETH</h4> 
                            <span>
                                <p>50 seeded</p>
                                <div className='dynamic-pricing-icon'> 
                                    <a href='/details'>
                                        <p>Dynamic Pricing Stats <i class="fas fa-question-circle"></i></p>
                                    </a>    
                                </div>
                            </span>
                        </section>                
                    </CardContent>                
                </Card>
                <section className='learn-more-section'>
                    <p>Buy and sell real books with digital currency. Delivered on demand. <button className='learn-more-button' onClick={() => showDynamicPricingStatModal()}>Learn More</button></p>
                </section>
            </div>
        </React.Fragment>
    )
}

export default AuctionCard