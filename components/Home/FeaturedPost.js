import React from 'react'
import PostGrid from '../Post/Posts-grid'
import classes from './FeaturedPost.module.css'

function FeaturedPost({posts}) {
  return (
    <section className={classes.latest}>
    <h2>Featured Cheatsheets</h2>
    <PostGrid posts={posts}/>
    </section>
  )
}

export default FeaturedPost