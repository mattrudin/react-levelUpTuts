import React, { useState } from 'react'

const ToggleRenderProps = (props) => {
    const [isToggle, setToggle] = useState(false)
    const { render } = props

    const toggle = () => isToggle ? setToggle(false) : setToggle(true)

    return <div>{render({
        func: toggle, 
        status: isToggle
    })}</div>
}

export default ToggleRenderProps
