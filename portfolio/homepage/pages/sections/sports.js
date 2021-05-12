import React from 'react';
import Link from 'next/link';
import Head from 'next/head';


const sports = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Sports News</title>
      </Head>
      <h1>Sports</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </React.Fragment>
  );
}

export default sports;
