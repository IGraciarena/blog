import React from 'react';
import { Footer, Navbar } from '../components';
import { AuthorLayout } from '../layouts';

const AboutPage = ({ authors }) => {
  return (
    <div>
      <Navbar />
      <AuthorLayout authors={authors ? authors : ''} />
      <Footer />
    </div>
  );
};

export default AboutPage;
