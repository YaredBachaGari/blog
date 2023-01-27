import React, { Fragment } from "react";
import Hero from "../components/Home/Hero";
import FeaturedPost from "../components/Home/FeaturedPost";
import { getFeaturedNotes } from "../Utils/utility-fn";

function Home(props) {
  const {featuredNoted} = props
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
 
  return (
    <Fragment>
      <Hero />
      <FeaturedPost posts={featuredNoted} />
    </Fragment>
  );
}

export async function getStaticProps(){
  const featureddata = getFeaturedNotes()
  console.log(featureddata)
  return{
    props:{
      featuredNoted:featureddata
    },
    revalidate:300
  }
}

export default Home;
