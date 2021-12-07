import {extendTheme} from "@chakra-ui/react"
import { ButtonStyles as Button } from "./components/ButtonStyles"
const ctheme = extendTheme({
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