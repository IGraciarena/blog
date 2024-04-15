import React from 'react';
import { AboutMe, Blogs, Footer, Navbar } from '../components';

const Homepage = ({ blogs }) => {
  return (
    <div>
      <Navbar />
      <AboutMe />
      <Blogs blogs={blogs ? blogs : ''} />
      <Footer />
    </div>
  );
};

export default Homepage;
