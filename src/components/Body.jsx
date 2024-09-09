import React from 'react'
import Animate from './Animate'
import SOLIQCards from './SOLIQCards'
import DiscoverCards from './DiscoverCards'
import LineBreak from './LineBreak'
import Community from './Community'
import Footer from './Footer'

const Body = () => {
  return (
    <div>
        <Animate />
        <SOLIQCards />
        <DiscoverCards />
        <LineBreak />
        <Community />
        <LineBreak />
        <Footer />
    </div>
  )
}

export default Body