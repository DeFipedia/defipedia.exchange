import React, {useState} from 'react'
import {Grid, Card, CardContent, Tooltip, Button} from '@material-ui/core'
import Popup from '../components/Popup'
import {Spring} from 'react-spring/renderprops'
import { useSpring, animated } from 'react-spring'

const Home = () => {
    const [open, setOpen] = useState(false)

    const showComingSoon = () => {
        setOpen(true) 
    } 
    //for 3d card//
    const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
    const trans = (x, y, s) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
    //----------//
    return(
        <div className='home-page'>
            <Grid 
                container 
                direction='row'
                spacing={6}
                justify='center'
            >
                <Spring
                    from={{opacity: 0, marginLeft: -500}}
                    to={{opacity: 1, marginLeft: 0 }}
                >
                    {props => (
                        <Grid item sm={12} md={6} style={props}>
                            <h3>What are BOOKS?</h3>
                            <p>It is a long established fact that a reader will 
                                be distracted by the readable content of a 
                                page when looking at its layout. The point of 
                                using Lorem Ipsum is that it has a more-or-less 
                                normal distribution of letters, as opposed 
                                to using ‘Content here, content here’, 
                                making it look like readable English. 
                            </p>
                        </Grid>
                    )}
                </Spring>
                {/* ---------------------------------------- */}
                
                <Grid item sm={12} md={6}>
                    <animated.div
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }}
                    >
                        <Card>
                            <CardContent>
                                <p>Token data will be available here</p>
                            </CardContent>
                        </Card>
                    </animated.div>
                    <Button variant='contained' color='primary' className='buy-btn'>Buy</Button>
                    <span className='coming-soon-actions'>
                        <Tooltip title='Coming Soon'>
                            <Button onClick={showComingSoon} variant='contained' disableElevation>Sell</Button>
                        </Tooltip>
                        <Tooltip title='Coming Soon'>
                            <Button variant='contained' disableElevation>Redeem</Button>
                        </Tooltip>
                    </span>
                </Grid>
            </Grid>
            <Popup open={open}/>
        </div>
    )
}

export default Home