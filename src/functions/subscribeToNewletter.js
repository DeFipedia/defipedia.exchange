import axios from 'axios'
import AlertMessage from '../components/AlertMessage'

export const subscribeToNewsletter = async (email) => {
    if(email !== ''){
        axios.post(`${process.env.REACT_APP_MAILING_SERVICE}/subscribe`, {email: email})
        .then(res => {
            if(res.request.status === 200) {
                return true
            }else{
                return false
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
}