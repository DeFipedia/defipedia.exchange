import React from 'react'
import HomeMobile from './HomeMobile'
import HomeDesktop from './HomeDesktop'
import withSizes from 'react-sizes'

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