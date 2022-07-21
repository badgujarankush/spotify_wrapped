import React from 'react'
import './Card.css'
const Card = ({title,image,link}) => {
  return (
    <a class='link-tag' href={link.external_urls.spotify} target='_blank' rel="noreferrer"><div className='card fade' title={title}>
    <img className='image' src={image} alt={title}/>
</div></a>
    
  )
}

export default Card