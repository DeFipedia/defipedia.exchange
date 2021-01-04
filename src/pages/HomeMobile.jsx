import React, {useState} from 'react';
// @DEV: these were import as we are using a react port of slick carousel and it doesn't come with CSS bundled//
//So, we have also installd slick-carousel and imported css as mentioned in docs//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import SwipeableFooter from '../components/SwipeableFooter'
import BuyModal from '../components/BuyModal'

const HomeMobile = (props) => {

    const {uniswapData, saleData, wallet} = props

    const carouselSettings = {
        dots: true,
        dotsClass: 'slick-dots slick-square-dots', //this is to customize the dots//
        fade: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 1,
        centerPadding: '45px'
    }

    // for handling buy modal trigger //
    const [triggerBuyModal, setTriggerBuyModal] = useState(false)

    // methods //
    const showBuyModal = () => {
        setTriggerBuyModal(true)
    }

    const closeBuyModal = () => {
        setTriggerBuyModal(false)
    }

    return(
        <div className='home-page-mobile'>
            <Slider className='sale-carousel' {...carouselSettings}>
                {/* This is UniSwap Card */}
                <section className='uniswap-card'>
                    <SaleCard 
                        title='Uniswap'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        price={uniswapData.rate}
                        totalTokens='50'
                        learnMoreTag='Swap here!'
                    />
                    <Button label='Buy' variant='primary'/>
                    <Button label='Sell on Uniswap' variant='disabled' />
                </section>
                {/* Sale Card */}
                <section className='pre-sale-card'>
                    <SaleCard 
                        title='Pre-sale'
                        image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                        price={saleData.price}
                        totalTokens='950'
                        learnMoreTag='Buy direct!'
                    />
                    <Button label='Buy' variant='secondary' onClick={showBuyModal}/>
                    <Button label='Redeem (coming soon)' variant='disabled' />
                </section>
                {/* Ducth auction card */}
                <section className='dutch-auction-card'>
                    {/* this div is masking layer */}
                    <div className='dutch-auction-mask'></div>
                    {/* <p className='auction-mask-text'>Auction Closed</p> */}
                    <SaleCard 
                        title='Auction'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        totalTokens='950'
                        learnMoreTag='The pre-sale has moved. Early participants can reclaim their pre-sale deposits here.'
                    />
                    <Button label='Withdraw deposit' variant='default'/>
                </section>
            </Slider>
            {/* Swipeable footer */}
            <SwipeableFooter />
            <BuyModal 
                open={triggerBuyModal} 
                close={closeBuyModal} 
                wallet={wallet}
                saleData={saleData}
            />
        </div>

    )
}

export default HomeMobile