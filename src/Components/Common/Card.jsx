import React from 'react'
import './Card.css'
const Card = ({title,image}) => {
  return (
    <div className='card fade' title={title}>
        <img className='image' src={image} alt={title}/>
    </div>
  )
}

export default Card