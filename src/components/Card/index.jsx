import React from 'react'
import './card.css'

export default function Card(props) {
  
  console.log(props)
  let badgeText 
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
    badgeText = "ONLINE"
  } else badgeText = props.openSpots

  return (
      <div className="card">
          {badgeText && <div className='card--badge'>{badgeText}</div>}
          <img src={require(`../../images/${props.coverImg}`)} className="card--image" />
          <div className="card--stats">
              <img src={require("../../images/star.png")} className="card--star" />
              <span>{props.stats.rating}</span>
              <span className="gray">({props.stats.reviewCount}) • </span>
              <span className="gray">{props.location}</span>
          </div>
          <p>{props.title}</p>
          <p><span className="bold">From ${props.price}</span> / person</p>
          <p className='card--desc--container'><span className='text--bold'>Description:</span><br /> {props.description}</p>
      </div>
  )
}
