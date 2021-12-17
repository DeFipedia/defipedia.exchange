import { Box, Text , Image, Flex, Spacer} from "@chakra-ui/react";
import React from 'react'

function SaleCard(props) {
    const {title, image, price, numberOfTokens, learnMoreTag, desc, color} = props

    return(
        <React.Fragment>
        <Box 
            h='470px' 
            w='334px'
            background='linear-gradient(to bottom right, #343434, #151515)'
            borderRadius='10px'
        >
            <Text 
                color='white' 
                fontSize='18px'
                ml='35px'
                pt='35px'
                fontWeight='bold'
                as='h3'
            > {title} </Text>
            <Text color='#979797' ml='36px' as='p' fontSize='12px'>2020 DeFi Packs</Text>
            <Image h='240px' w='240px' m='auto' mt={8} src={image} border='2px solid #343434' borderRadius='2px' boxShadow='2px 4px 4px' alt='$BOOKS'/>
            <Text as='h3' color='white' ml='35px' mt='15px'>{price ? price.toString().substring(0,6)+'  ETH' : null }</Text>
            { numberOfTokens ?
                <Flex m='35px' mt='0px' color='#979797'>
                    <Text as='p'>{numberOfTokens ? numberOfTokens+ ' available' : null}</Text>
                    <Spacer />
                    <Text>Learn more <i className="fas fa-question-circle"></i></Text>
                </Flex>
                : 
                null
            }
        </Box>
        {desc && learnMoreTag ? 
        <Box h='70px' width='334px' background='#F2F2F2' borderRadius='10px'>
            <Text ml='30px' pt='10px' fontSize='12px' as='p'>{desc}</Text>
            <Text ml='30px' fontSize='12px' as='p'>{learnMoreTag}</Text>
        </Box>
        : null}
        </React.Fragment>
    )
}

export default SaleCard
// import React, {useState, useRef} from 'react'
// import {Card, CardContent} from '@material-ui/core'
// import Details from '../pages/Details'

// const SaleCard = (props) => {
//     //props for card data//
//     let {title, image, price, numberOfTokens, learnMoreTag, desc} = props

//     const [triggerDetailsModal, setDetailsModal] = useState(false)
//     const cardRef = useRef()

//     let displayPrice = 0

//     if(price) {
//         displayPrice = price.toString().substring(0,8)
//     }

//     const showDetailsModal = () => {
//         setDetailsModal(true)
//     }

//     const closeDetailsModal = () => {
//         setDetailsModal(false)
//     }

//     const getBoundingRect = () => {
//         if (!cardRef.current) {
//             return {
//                 x: 0,
//                 y: 0
//             }
//         }

//         return cardRef.current.getBoundingClientRect();
//     }
    
//     return(
//         <React.Fragment>
//             {/* @DEV: this actually renders the card */}
//             <div className='card-panel' ref={cardRef}>
//                 <Card className='sale-card'>
//                     <CardContent>
//                         <span className='card-header'>
//                             <div className='card-title'>
//                                 <h3>$BOOKS on </h3> <h3 className='sale-type'>{title}</h3>
//                             </div>
//                         </span>
//                         <p>2020 DeFi Packs</p>  
//                         <img alt='cover-art' src={image}/>  
//                         <section className='card-data'>
//                             <h4>{displayPrice} ETH</h4> 
//                             <span>
//                                 <p>{numberOfTokens} available</p>
//                                 <div className='dynamic-pricing-icon'> 
//                                     <div onClick={showDetailsModal}>
//                                         <p>Learn more <i className="fas fa-question-circle"></i></p>
//                                     </div>    
//                                 </div>
//                             </span>
//                         </section>                
//                     </CardContent>                
//                 </Card>
//                 <section className='learn-more-section'>
//                     <p>{desc}</p>
//                     <p>{learnMoreTag}</p>
//                 </section>
//             </div>
//             <Details 
//                 open={triggerDetailsModal}
//                 closeDetailsModal={closeDetailsModal}
//                 displayX={getBoundingRect().x}
//                 displayY={getBoundingRect().y}
//             />
//         </React.Fragment>
//     )
// }

// export default SaleCard