import { useEffect } from 'react'
import { createPortal } from 'react-dom'


const Modal = (props) => {
    const { children } = props
    const element = document.createElement('div')
    const modalRoot = document.getElementById('modal')

    useEffect(() => {
        // Mounting
        modalRoot.appendChild(element)
        
        // Unmounting / CleanUp
        return () => modalRoot.removeChild(element)
    }, [])

    return createPortal(children, element)
}

export default Modal
