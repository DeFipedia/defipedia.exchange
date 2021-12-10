export const ButtonStyles = {
    baseStyle:{
        background: 'white',
        color:'black',
        borderRadius: '4px',
        fontStyle: 'normal',
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
        })
},
    defaultProps: {
        size: 'sm',
        // variant: 'solid'
    }
    }