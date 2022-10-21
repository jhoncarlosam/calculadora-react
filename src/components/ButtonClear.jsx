import React from 'react'
import '../css/button-clear.css'

const ButtonClear = (props) => {
  return (
    <div className='boton-clear' onClick={props.handleClear}>
      {props.children}
    </div>
  )
}

export default ButtonClear