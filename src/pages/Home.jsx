import React, {useState} from 'react'
import {Grid, Card, CardContent, Tooltip, Button} from '@material-ui/core'
import Popup from '../components/Popup'

const Home = () => {
    const [open, setOpen] = useState(false)

    const showComingSoon = () => {
        setOpen(true) 
    }

    return(
        <div className='home-page'>
            <Grid 
                container 
                direction='row'
                spacing={6}
                justify='center'
            >
                <Grid item sm={12} md={6}>
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
                <Grid item sm={12} md={6}>
                    <Card>
                        <CardContent>
                            <p>Token data will be available here</p>
                        </CardContent>
                    </Card>
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