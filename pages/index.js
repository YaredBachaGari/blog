import React, { Fragment } from 'react'
import Hero from '../components/Home/Hero'
import FeaturedPost from '../components/Home/FeaturedPost'

function Home() {
  return (
    <Fragment>
      <Hero/>
      <FeaturedPost/>
    </Fragment>
  )
}

export default Home