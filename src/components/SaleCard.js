import React, {useState} from 'react'
import {Card, CardContent} from '@material-ui/core'
import Details from '../pages/Details'

const SaleCard = (props) => {
    //props for card data//
    let {title, image, price, totalTokens, learnMoreTag} = props

    const [triggerDetailsModal, setDetailsModal] = useState(false)

    let displayPrice = 0

    if(price) {
        displayPrice = price.toString().substring(0,8)
    }

    const showDetailsModal = () => {
        setDetailsModal(true)
    }

    const closeDetailsModal = () => {
        setDetailsModal(false)
    }
    
    return(
        <React.Fragment>
            {/* @DEV: this actually renders the card */}
            <div className='card-panel'>
                <Card className='sale-card'>
                    <CardContent>
                        <span className='card-header'>
                            <div className='card-title'>
                                <h3>$BOOKS on </h3> <h3 className='sale-type'>{title}</h3>
                            </div>
                        </span>
                        <p>2020 DeFi Packs</p>  
                        <img alt='cover-art' src={image}/>  
                        <section className='card-data'>
                            <h4>{displayPrice} ETH</h4> 
                            <span>
                                <p>{totalTokens} available</p>
                                <div className='dynamic-pricing-icon'> 
                                    <div onClick={showDetailsModal}>
                                        <p>Learn more <i className="fas fa-question-circle"></i></p>
                                    </div>    
                                </div>
                            </span>
                        </section>                
                    </CardContent>                
                </Card>
                <section className='learn-more-section'>
                    <p>Support the free market</p>
                    <p>{learnMoreTag}</p>
                </section>
            </div>
            <Details 
                open={triggerDetailsModal}
                closeDetailsModal={closeDetailsModal}
            />
        </React.Fragment>
    )
}

export default SaleCard