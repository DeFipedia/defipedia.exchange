import React, {useState} from 'react'
import {Card, CardContent, Tooltip, Button, useTheme} from '@material-ui/core'
import Popup from '../components/Popup'

const Home = () => {
    let theme = useTheme()

    const [open, setOpen] = useState(false)

    const showComingSoon = () => {
        setOpen(true) 
    }
    //----------//
    return(
        <div className='home-page'>
            <Card>
                <CardContent>
                    <p>Token data will be available here</p>                        
                </CardContent>                
            </Card>
            <div className='actions'>
                <Button variant='contained' style={{backgroundColor: theme.palette.primary.main}} className='buy-btn'>Buy</Button>
                <span className='coming-soon-actions'>
                    <Tooltip title='Coming Soon'>
                        <Button onClick={showComingSoon} variant='contained' disableElevation>Sell</Button>
                    </Tooltip>
                    <Tooltip title='Coming Soon'>               
                        <Button variant='contained' disableElevation>Redeem</Button>
                    </Tooltip>
                </span>
            </div>
        <Popup open={open}/>
        </div>
    )
}

export default Home