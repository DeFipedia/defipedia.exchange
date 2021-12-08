import {extendTheme} from "@chakra-ui/react"
import { ButtonStyles as Button } from "./components/ButtonStyles"
const ctheme = extendTheme({
    styles: {
        global: {
            'html, body': {
                height: '100%',
        },
            'body': {
                    fontFamily: 'Nunito Sans',
                     overflowX: 'hidden'
 
            }
        }
    },
    colors: {
        primary: '#ff6400',
        background: '#ffffff',
        text: '#252525',
        secondary: '#006fff',
        complimentary: '#D6D6D6'
    },
    components: {
        Button
    }
})

export default ctheme