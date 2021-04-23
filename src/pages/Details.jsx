/* eslint-disable react/prop-types */
import React  from 'react'
import CloseIcon from '@material-ui/icons/Close';
import {Modal} from '@material-ui/core'
import styled from 'styled-components'

const PositionedDiv = styled.div`
  position: fixed;
  left: ${props => props.x}px;
  top: ${props => props.y}px;
`

// @DEV: this used to be separate page on separate route but converted into mode now//
// TODO: Later on a custom modal component is will be created and this file will just hold JSX to display - for maintaining patterns better as code-base grows// 
const Details = ({open, closeDetailsModal, displayX, displayY}) => (
        <Modal
        open={open}
        onClose={closeDetailsModal}
        className='details-page'
        >
            <PositionedDiv className='details-card' x={displayX} y={displayY}>
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
            </PositionedDiv>
        </Modal>
    )

export default Details