import React from 'react' 
import {Alert} from '@material-ui/lab'

const AlertMessage = ({type='info', msg}) => {
    return(
        <Alert severity={type}>
            {msg}
        </Alert>
    )
}

export default AlertMessage