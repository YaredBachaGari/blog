import React from "react";
import AllPosts from "../../components/Post/AllPosts";
import getAllNotes from "../../Utils/utility-fn";
const data = [
  {
    title: "learn react",
    image: "blogcover.avif",
    excerpt: "yes let us learn something new ",
    date: "2023-01-05",
    slug: "blog-1",
    content: "",
    isFeatured: true,
  },
  {
    title: "learn next",
    image: "blogcover2.avif",
    excerpt: "yes let us learn something new ",
    date: "2023-01-15",
    slug: "blog-2",
    content: "",
    isFeatured: true,
  },
  {
    title: "learn typscript",
    image: "blogcover3.avif",
    excerpt: "yes let us learn soething new ",
    date: "2023-01-25",
    slug: "blog-3",
    content: "",
    isFeatured: true,
  },
];
function AllPostsPage({allposts}) {
  return (
    <>
      <AllPosts posts={allposts} />
    </>
  );
}

export async function getStaticProps(){
    const allNotes = getAllNotes()
    return {
        props:{
            allposts:allNotes,
        },
        revalidate:300,
    }
}

export default AllPostsPage;
