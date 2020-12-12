import React from 'react'
import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'
import withSizes from 'react-sizes'

// DEV: This components just deices which component to render bassed on device's viewport//
//Not implemented in App.js to avoid clutter and to keep it clean and modular//
const Home = ({isMobile}) => {
    return (
        <React.Fragment>
            {isMobile ?  <HomeMobile /> : <HomeDesktop />}
        </React.Fragment>
    )
}   

const mapSizesToProps = ({width}) => ({
    isMobile:  width < 600
})

export default withSizes(mapSizesToProps)(Home)