import React from 'react' 
import MuiAlert from '@material-ui/lab/Alert'
import {Snackbar} from '@material-ui/core'

function Alert(props) {
    return <MuiAlert elevation={0} variant="filled" {...props}/>
}

const AlertMessage = ({type='info', msg, open, handleClose}) => {

    return(
        <Snackbar 
        className='alert-message'
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={open} 
        onClose={handleClose}
        autoHideDuration={3000} 
        >
            <Alert severity={type}>
                {msg}
            </Alert>
        </Snackbar>
    )
}

export default AlertMessage