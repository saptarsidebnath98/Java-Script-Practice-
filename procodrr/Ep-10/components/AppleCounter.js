import React, { useState } from 'react'
import Basket from './Basket'
import Button from './Button'
import LeftArrow from '../asset/left-arrow.png'
import RightArrow from '../asset/right-arrow.png'
import './AppleCounter.css'

const AppleCounter = () => {
  const totalApple = 10;
  
  const [rightApple, setRightApple] = useState(0);
  const [leftApple, setLeftApple] = useState(totalApple - rightApple);

  const leftArrowHandler = () => {
    if(rightApple > 0){
      setLeftApple(leftApple + 1);
      setRightApple(rightApple - 1);
    }
  }

  const rightArrowHandler = () => {
    if(leftApple > 0){
      setRightApple(rightApple + 1);
      setLeftApple(leftApple - 1);
    }
  }

  return (
    <section className='container'>
        <Basket apple={leftApple} basketName="Basket 1"/>
        <Button imgURL={LeftArrow} btnName="left arrow" onClick={leftArrowHandler}/>
        <Button imgURL={RightArrow} btnName="right arrow" onClick={rightArrowHandler}/>
        <Basket apple={rightApple} basketName="Basket 2"/>
    </section>
  )
}

export default AppleCounter