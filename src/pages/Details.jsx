import React  from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Modal} from '@material-ui/core'
// @DEV: this used to be seperate page on seperate route but converted into moda now//
//TODO: Later on a custom modal component is will be created and this file will just hold JSX to display - for maintaning patterns better as code-base grows// 
const Details = ({wallet, saleData, open, closeDetailsModal}) => {

    return(
        <Modal
        open={open}
        onClose={closeDetailsModal}
        className='details-page'
        >
            <div className='details-card'>
                <span className='header'>
                    <h4>BOOKS Stats</h4>
                    <CloseIcon onClick={closeDetailsModal}/>
                </span>
                <section className='detail-card-data'>
                        <div>
                            <p><span role='img' aria-label='book emoji'>📓</span> Initial BOOKS on UniSwap</p>
                            <p>50</p>
                        </div>
                        <div>
                            <p><span role='img' aria-label='book emoji'>📓</span> Initial BOOKS on Sale</p>
                            <p>950</p>
                        </div>
                        <div>
                            <p><span role='img' aria-label='fire emoji'>🔥</span> Redeemed BOOKS</p>
                            <p>0</p>
                        </div>
                        <div>
                            <p><span role='img' aria-label='liquid emoji'>💦</span> BOOKS Pool</p>
                            <p>1000</p>
                        </div>

                    </section>
                <section className='detail-card-description'>
                    <p>The price of BOOKS changes when tokens are bought and sold</p>
                    <a href='https://medium.com/@DeFiPedia/defipedia-debuts-with-books-collectors-defi-pack-b5eaf570ae9' target='_blank' rel='noopener noreferrer'>Read More</a>
                </section>
            </div>
        </Modal>
    )
}

export default Details