export const ButtonStyles = {
    baseStyles:{
        // borderRadius: '4px',
        // marginTop: '10px',
        // display: 'block',
        // fontFamily: 'Helvetica',
        // fontStyle: 'normal',
        // textAlign: 'center',
        // filter: 'drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))',
        // border: 'none'
    },
    /// only small and large are declared due to no implementation of a medium button ///
     sizes:{
         sm: {
             mx: 2,
            width: '160px',
            height: '40px',
            fontSize: '12px',
            lineHeight: '14px',
            fontWeight: 'bold',
            letterSpacing: '1px',
           }
     },
     variants: {
        solid: (props) => ({
            bg:`${props.colorScheme}`, 
            color: 'white',
        }),
        outlined: (props) => ({
            border: '1px solid',
            borderColor: `${props.colorScheme}`,
            color: props.colorScheme
        })
},
    defaultProps: {
        size: 'sm',
        variant: 'solid'
    }
    }