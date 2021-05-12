import React from 'react';
import Link from 'next/link';
import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <React.Fragment>
      <nav className={navStyles.nav}>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/sections/sports">Sports</Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Nav;
