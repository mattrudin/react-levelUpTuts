import React from 'react'
import Portal from './Portal'
import styled from 'styled-components'

// ModalWrapper has no background, so things behind the modal are shown
const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalCard = styled.div`
    background: white;
    padding: 20px;
    display: flex;
    flex-direction: column;
    box-shadow: 20px 20px 10px rgba(0, 0, 0, 0.3);
    z-index: 10;
`

const Background = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: black;
    opacity: 0.3;
`

const Modal = (props) => {
    const { children, func } = props

    return (
        <Portal>
            <ModalWrapper>
                <ModalCard>
                    {children}
                    <button onClick={func}>Close me</button>
                </ModalCard>
                <Background onClick={func} />
            </ModalWrapper>
        </Portal>
    )
}

export default Modal
