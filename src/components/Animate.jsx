import React from 'react'
import { Link } from 'react-router-dom'

const Animate = () => {
  return (
    <div className='animate'>
      <video src="/animation.mp4" poster='/poster.png' loop autoPlay='autoplay' muted>
        <source src="/animation.mp4" type="video/mp4" />
      </video>
        <h3>The Most Intuitive Whatsapp Solana Trading Bot <br /> Trading Faster and Easier</h3>
        <Link target='_blank' to={'https://wa.me/+2348104131139/?text=/start'}>Start Trading</Link>
    </div>
  )
}

export default Animate