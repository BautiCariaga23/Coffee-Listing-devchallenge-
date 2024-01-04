import React, { useState } from 'react'
import "../App.css"
export default function CoffeeCard(props) {

  return (
    <div className='card'>
        <div className={`${props.popular ? 'popular' : 'hide'}`}>Popular</div>
        <img src = {props.image} className='coffeecard'/>
        <div className='info'>
        <h1>{props.name}</h1>
        <h2>{props.price}</h2>
        </div>
        <div className='info'>
        <span className={`${props.ratings ? '' : 'hide'}`}><h3>⭐ {props.rate} <span className='votes'>({props.votes} votes)</span></h3></span>
        <span className={`${props.ratings ? 'hide' : ''}`}><h3>✰ <span className='votes'>No ratings yet</span></h3></span>
        <h4 className={`${props.soldout ? 'soldout' : 'hide'}`}>Sold out</h4>
        </div>
    </div>
  )
}
