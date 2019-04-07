import React, { useState } from 'react'

const Toggle = (props) => {
  const [isToggle, setToggle] = useState(false)

  const toggle = () => isToggle ? setToggle(false) : setToggle(true)

  return (
    <div>
      {isToggle && props.children}
      <button onClick={toggle}>Show/hide</button>
    </div>
  )
}

export default Toggle
