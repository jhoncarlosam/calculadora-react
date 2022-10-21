import React from 'react'
import freeCodeCampLogo from '../imgs/freecodecamp-logo.jpg';


function Logo() {
  return (
    <div className="freecodecamp-contenedor">
        <img
          src={freeCodeCampLogo}
          className="freecodecamp-logo"
          alt="Logo de freecodecamp"
        />
      </div>
  )
}

export default Logo