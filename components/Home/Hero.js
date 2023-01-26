import React from "react";
import classes from "./Hero.module.css";
import Image from "next/image";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image src="/Yared_Gari_29.jpeg" width={500} height={500} alt="image of yared gari"/>
      </div>
      <h1>Hi🖐️ i am Yared Gari</h1>
      <p>
        I blog and share my learnings and thought about full stack web
        development on this page!!
      </p>
    </section>
  );
}

export default Hero;
