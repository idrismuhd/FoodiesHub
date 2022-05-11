import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa'

export default function QouteSection() {
  return (
    <div className='section quote container'>
      <p className='quote-text'>
        <FaQuoteLeft className='quote-icon' /> Food is everything we are. It's
        an extension of nationalist feeling, ethnic feeling, your personal
        history, your province, your region, your tribe, your grandma. It's
        inseparable from those from the get-go.
      </p>
      <p className='quoute-author'>- Anthony Bourdain</p>
    </div>
  )
}
