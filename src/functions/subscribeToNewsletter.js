import axios from 'axios'

export const subscribeToNewsletter = async (email) => {
    if(email !== ''){
        try{
            const res = await axios.post(`${process.env.REACT_APP_MAILING_SERVICE}/subscribe`, {email: email})
            if (res.status === 200){
                return true
            // TODO: Can add more descriptive errors here - needs to be implemented on service first
            }else{
                console.log('Bad Request')
            }

        }catch(error){
            console.error('Error: ', error)
        }
    }
}