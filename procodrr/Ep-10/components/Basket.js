import React from 'react'

const Basket = ({apple, basketName}) => {
  return (
    <div>
        <h3><strong>{apple}</strong> apple</h3>
        <p>{basketName}</p>
    </div>
  )
}

export default Basket