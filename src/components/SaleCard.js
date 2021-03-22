import React, {useState, useRef} from 'react'
import {Card, CardContent} from '@material-ui/core'
import Details from '../pages/Details'

const SaleCard = (props) => {
    //props for card data//
    let {title, image, price, numberOfTokens, learnMoreTag, desc} = props

    const [triggerDetailsModal, setDetailsModal] = useState(false)
    const cardRef = useRef()

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

    const getBoundingRect = () => {
        if (!cardRef.current) {
            return {
                x: 0,
                y: 0
            }
        }

        return cardRef.current.getBoundingClientRect();
    }
    
    return(
        <React.Fragment>
            {/* @DEV: this actually renders the card */}
            <div className='card-panel' ref={cardRef}>
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
                                <p>{numberOfTokens} available</p>
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
                    <p>{desc}</p>
                    <p>{learnMoreTag}</p>
                </section>
            </div>
            <Details 
                open={triggerDetailsModal}
                closeDetailsModal={closeDetailsModal}
                displayX={getBoundingRect().x}
                displayY={getBoundingRect().y}
            />
        </React.Fragment>
    )
}

export default SaleCard