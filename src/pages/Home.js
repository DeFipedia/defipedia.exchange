import React from 'react'
import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'
import withSizes from 'react-sizes'

// @DEV: This components just deices which component to render bassed on device's viewport//
//Not implemented in App.js to avoid clutter and to keep it clean and modular//
const Home = ({isMobile, uniswapData, saleData}) => {
    return (
        <React.Fragment>
            {isMobile 
                ? <HomeMobile uniswapData={uniswapData} saleData={saleData} /> 
                : <HomeDesktop uniswapData={uniswapData} saleData={saleData}  />
            }
        </React.Fragment>
    )
}   

const mapSizesToProps = ({width}) => ({
    // @Notice:  this is the breakpoint for mobile, changing this will effect on what gets render at which viewport//
    isMobile:  width < 1090
})

export default withSizes(mapSizesToProps)(Home)