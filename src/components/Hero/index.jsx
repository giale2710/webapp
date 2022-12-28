import React from 'react'
import './hero.css'

export default function hero() {
  return (
    <section className='hero'>
        <div className='hero--alignCenter'>
            <img src={ require('../../images/photo-grid.png') } className='hero--photo'/>
            <h1 className='hero--header'>Online Experiences</h1>
            <p className='hero--text'>Join unique interactive activites led by
            one of a kind host-all without leaving home.
            </p>
            <hr className='hr--gray' />
        </div>
    </section>
  )
}
