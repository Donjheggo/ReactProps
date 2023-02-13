import React from 'react'
import location from "/img/location.svg"


const Card = (props) => {
  return (
    <div className='d-flex justify-content-center bodyy'>
      <div className='d-flex cardd'>
        <div>
            <img className='card-image' src={props.item.image} alt="" />
        </div>
          <div className='data'>
            <div className='d-flex ms-2'>
              <img src={location} className="loc-img ms-1" />
              <p className='country'>{props.item.country}</p>
              <a href="" className='link ps-2'>View on Google Maps</a>
            </div>
            <div className='ms-3'>
              <h1 className='location'>{props.item.location}</h1>
              <p className='date'> {props.item.startDate} - {props.item.endDate} </p>
              <p className='description'>{props.item.description}</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Card