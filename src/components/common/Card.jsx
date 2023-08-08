import React from 'react'
import Row from './Row'

function Card({imgSrc, title}) {
  return (
    <Row className="flex-col w-[410px] h-[328px] items-center">
        <img className='image-fit w-[410px] h-[270px]' src={imgSrc} alt='...'/>
        <Row className="bg-[#243054] w-full h-[43px] text-white">
        <h2 className='ml-10 mt-2 cotoris-bold'>{title}</h2>
        </Row>
    </Row>
  )
}

export default Card