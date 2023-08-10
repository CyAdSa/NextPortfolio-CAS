import React from 'react';
import Header from '../src/app/Header';
import Footer from '../src/app/Footer';
import Home from '../src/app/Home';
import Comments from './Comments';
import GetInTouch from 'Contact';
import LeaveComment from './LeaveComment';
import ProjectCompaniesDirectory from './ProjectCompaniesDirectory';
import ProjectLivestream from './ProjectLivestream';
import '../src/styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Pages {...pageProps} />
        <Header/>
        <Footer/>
        <ProjectLivestream/>
        <ProjectCompaniesDirectory/>
        <LeaveComment />
        <GetInTouch />
        <Home />
        <Comments/>
      </main>
      <Footer />
    </div>
  );
}

export default MyApp;
