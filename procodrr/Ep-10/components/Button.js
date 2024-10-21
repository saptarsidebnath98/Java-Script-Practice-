import React from 'react'

const Button = ({imgURL, btnName, onClick}) => {
  return (
    <div>
        <button title={btnName} onClick={onClick}>
            <img src={imgURL} alt="image"/>
        </button>
    </div>
  )
}

export default Button