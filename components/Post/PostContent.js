import React from "react";
import PostHeader from "./PostHeader";
import classes from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";

const data = {
  title: "learn react",
  image: "blogcover.avif",
  date: "2023-01-05",
  slug: "blog-1",
  content: "# This the content of the clicked card",
};

function PostContent() {
  return (
    <article className={classes.content}>
      <PostHeader
        title={data.title}
        image={`/posts/${data.slug}/${data.image}`}
      />
      <ReactMarkdown>{data.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
