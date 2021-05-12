import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';

const HomePage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Top Headlines</title>
        <meta name="keywords" content="homepage" />
      </Head>
      <Nav />
      <div>
        Welcome to next.js!
      </div>
    </React.Fragment>
  );
}

export default HomePage;
