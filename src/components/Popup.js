import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

const Alert = (props) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const Popup = (props) => {
    let {open} = props
    return(
        <Snackbar open={open} autoHideDuration={10}>
            <Alert severity='info' color='text'>
                This feature will be coming soon.
            </Alert>
        </Snackbar>
    )
}

export default Popup