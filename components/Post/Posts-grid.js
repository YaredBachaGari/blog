import React from 'react'
import classes from './Post-grid.module.css'
import PostItem from './PostItem'

function PostGrid({posts}) {
  return (
    <ul className={classes.grid}>
{posts.map(post=><PostItem key={post.slug} post ={post}/>)}
    </ul>
  )
}

export default PostGrid