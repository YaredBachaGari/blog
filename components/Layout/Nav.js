import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import classes from "./Nav.module.css";

function Nav() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
