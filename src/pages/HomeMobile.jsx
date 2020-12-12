import React from 'react';
// @DEV: these were import as we are using a react port of slick carousel and it doesn't come with CSS bundled//
//So, we have also installd slick-carousel and imported css as mentioned in docs//
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import SaleCard from '../components/SaleCard'
import {Button} from '../components/Button'
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet'

const HomeMobile = (props) => {

    const {uniswapData} = props

    const carouselSettings = {
        dots: true,
        dotsClass: "slick-dots slick-square-dots", //this is to customize the dots//
        fade: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        initialSlide: 1
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
                    <Button label='Buy' />
                    <Button label='Sell on Uniswap' />
                </section>
                {/* Sale Card */}
                <section>
                    <SaleCard 
                        title='Pre-sale'
                        image={process.env.PUBLIC_URL + 'assets/books-presale.png'}
                        price='200'
                        totalTokens='950'
                        learnMoreTag='Buy direct!'
                    />
                    <Button label='Buy' />
                    <Button label='Redeem (coming soon)' />
                </section>
                {/* Ducth auction card */}
                <section>
                    <SaleCard 
                        title='Auction'
                        image={process.env.PUBLIC_URL + 'assets/cover-art.jpg'}
                        totalTokens='950'
                    />
                    <Button label='Withdraw deposit' />
                </section>
            </Slider>
            {/* Swipeable footer */}
            <SwipeableBottomSheet overflowHeight={64}>
                <div className='mobile-footer' style={{ height: '284px' }}>
                    <div className='nugget'></div>
                    <p>Don't miss out, keep pace with all the latest</p>
                    <input placeholder='Add an email address' />
                    <Button variant='outlined' >Subscribe</Button>
                    <section className='social-media-handle'>
                        <i class="fab fa-discord"></i>
                        <i class="fab fa-twitter-square"></i>
                        <i class="fab fa-linkedin"></i>
                        <i class="fab fa-github-square"></i>
                        <i class="fab fa-telegram"></i>
                        <i class="fab fa-medium"></i>
                    </section>
                </div>
            </SwipeableBottomSheet>
        </div>

    )
}

export default HomeMobile