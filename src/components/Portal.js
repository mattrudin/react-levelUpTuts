import { useEffect } from 'react'
import { createPortal } from 'react-dom'


const Portal = (props) => {
    const { children } = props
    const element = document.createElement('div')
    const portalRoot = document.getElementById('portal')

    useEffect(() => {
        // Mounting
        portalRoot.appendChild(element)
        
        // Unmounting / CleanUp
        return () => portalRoot.removeChild(element)
    }, [])

    return createPortal(children, element)
}

export default Portal
