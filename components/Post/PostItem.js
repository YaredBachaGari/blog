import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./PostItem.module.css";

function PostItem({ post }) {
  const { title, image, excerpt, date, slug, content, isFeatured } = post;
  const formattedDate = new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <li className={classes.post}>
      <Link href={`/posts/${slug}`}>
        <div className={classes.image}>
          <Image
            src={`/posts/${slug}/${image}`}
            width={400}
            height={300}
            alt={title}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
}

export default PostItem;
