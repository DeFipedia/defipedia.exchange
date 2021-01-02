import React, {useState} from 'react';
// @DEV: these were import as we are using a react port of slick carousel and it doesn't come with CSS bundled//
//So, we have also installd slick-carousel and imported css as mentioned in docs//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'
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
                <section>
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
                <section>
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
                <section>
                    {/* this div is masking layer */}
                    <div className='dutch-auction-mask'></div>
                    <p className='auction-mask-text'>Auction Closed</p>
                    <SaleCard 
                        title='Auction'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        totalTokens='950'
                    />
                    <Button label='Withdraw deposit' variant='default'/>
                </section>
            </Slider>
            {/* Swipeable footer */}
            <SwipeableBottomSheet overflowHeight={60}>
                <div className='mobile-footer' style={{ height: '285px' }}>
                    <div className='nugget'></div>
                    <p>Don't miss out, keep pace with all the latest</p>
                    <section className='subscribe-section'>
                        <input placeholder='Add an email address' />
                        <Button variant='outlined' size='medium'>Subscribe</Button>
                    </section>
                    <section className='social-media-handle'>
                        <i className="fab fa-discord"></i>
                        <i className="fab fa-twitter-square"></i>
                        <i className="fab fa-linkedin"></i>
                        <i className="fab fa-github-square"></i>
                        <i className="fab fa-telegram"></i>
                        <i className="fab fa-medium"></i>
                    </section>
                </div>
            </SwipeableBottomSheet>
            <BuyModal 
                open={triggerBuyModal} 
                close={closeBuyModal} 
                wallet={wallet}
            />
        </div>

    )
}

export default HomeMobile