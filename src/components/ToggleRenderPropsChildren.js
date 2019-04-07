import { useState } from 'react'

const ToggleRenderPropsChildren = (props) => {
    const [isToggle, setToggle] = useState(false)
    const { children } = props

    const toggle = () => isToggle ? setToggle(false) : setToggle(true)

    return children({
        func: toggle, 
        status: isToggle
    })
}

export default ToggleRenderPropsChildren
