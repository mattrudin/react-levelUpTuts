import React from 'react'
import Portal from './Portal'
import styled from 'styled-components'

const ModalWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: teal;
`

const Modal = (props) => {
    const { children, func } = props

    return (
        <Portal>
            <ModalWrapper>
                {children}
                <button onClick={func}>Close me</button>
            </ModalWrapper>
        </Portal>
    )
}

export default Modal
