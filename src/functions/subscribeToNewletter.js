import axios from 'axios'

export const subscribeToNewsletter = async (email) => {
    console.log('From subscribe to newsletter', email)
    console.log(`${process.env.REACT_APP_MAILING_SERVICE}subscribe`)
    if(email !== ''){
        axios.post(`${process.env.REACT_APP_MAILING_SERVICE}subscribe`, {email: email})
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(error => {
            console.log(error)
        })
    }
}