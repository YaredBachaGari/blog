import React from "react";
import AllPosts from "../../components/Post/AllPosts";
const data = [
    {
      title: "learn react",
      image: "blogcover.avif",
      excerpt: "yes let us learn something new ",
      date: "2023-01-05",
      slug: "blog-1",
    },
    {
      title: "learn next",
      image: "blogcover2.avif",
      excerpt: "yes let us learn something new ",
      date: "2023-01-15",
      slug: "blog-2",
    },
    {
      title: "learn typscript",
      image: "blogcover3.avif",
      excerpt: "yes let us learn soething new ",
      date: "2023-01-25",
      slug: "blog-3",
    },
  ];
function AllPostsPage() {
  return (
    <>
      <AllPosts posts={data} />
    </>
  );
}

export default AllPostsPage;
