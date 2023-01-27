import React from "react";
import classes from "./AllPosts.module.css";
import PostGrid from "./Posts-grid";

function AllPosts({ posts }) {
  return (
    <div className={classes.posts}>
      <h1>All Posts</h1> <PostGrid posts={posts} />
    </div>
  );
}

export default AllPosts;
