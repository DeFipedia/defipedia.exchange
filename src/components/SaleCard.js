import React from 'react'
import {Card, CardContent} from '@material-ui/core'

const SaleCard = (props) => {
    //props for card data//
    let {title, image, price, totalTokens, learnMoreTag} = props

    let displayPrice = 0
    if(price) {
        displayPrice = price.toString().substring(0,8)
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
                                    <a href='/details'>
                                        <p>Learn more <i className="fas fa-question-circle"></i></p>
                                    </a>    
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
        </React.Fragment>
    )
}

export default SaleCard