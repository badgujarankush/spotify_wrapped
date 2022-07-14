import React from 'react'
import './Card.css'
const Card = ({title,image}) => {
  return (
    <div className='card fade' title={title}>
        <img className='image' src={image} alt='Machine Gun Kelly'/>
    </div>
  )
}

export default Card