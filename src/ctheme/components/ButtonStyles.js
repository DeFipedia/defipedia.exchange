export const ButtonStyles = {
    baseStyle:{
    },
     sizes:{
         sm: {
            mx: 2,
            height: '40px',
            fontSize: 'sm',
            lineHeight: '14px',
            fontWeight: 'bold',
            letterSpacing: '1px',
           },
        md: {
            height: '40px',
            width: '334px',
            // fontSize: 16px
    lineHeight: '18px',
    fontWeight: 'bold',
    letterSpacing: '1px'
        }
     },
     variants: {
        solid: (props) => ({
            color: 'white',
            background: props.colorScheme ? props.colorScheme : 'primary'
        }),
        outlined: (props) => ({
            border: '1px solid',
            borderColor: props.colorScheme ? props.colorScheme : 'primary',
            color:  props.colorScheme ? props.colorScheme : 'primary',
            background: 'white'
        }),
        bland: ({
            color: 'black',
            background: 'white',
            border: '1px solid black',
            _hover: {
                border: '2px solid black'
            }
        })
},
    defaultProps: {
        size: 'sm',
        variant: 'solid'
    }
    }