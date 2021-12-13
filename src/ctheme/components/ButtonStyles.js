export const ButtonStyles = {
    baseStyle:{
        marginTop: '10px',
        filter: 'drop-shadow(0 2px 2px rgba(0,0,0,.25))'
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
            background: 'transparent'
        }),
        bland: ({
            color: 'black',
            background: 'white',
            border: '1px solid black',
            _hover: {
                border: '2px solid black'
            }
        }),
        disabled: ({
            color: 'grey.200',
            background: 'grey.100'
        })
},
    defaultProps: {
        size: 'sm',
        variant: 'solid'
    }
    }