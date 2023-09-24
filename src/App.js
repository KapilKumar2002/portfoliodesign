import './App.css';
import Banner from './components/banner/banner';
import Features from './components/features/features';
import Navbar from './components/navbar/navbar';
import React from 'react';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';
import FooterBottom from './components/footer/footerBottom';
import Testimonial from './components/testimonial/testimonial';
import Contact from './components/contact/contact';
function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="mx-width-screen-2xl mx-autp px-16">
      <Banner />
      <Features />
      <Projects />
      <Testimonial />
      <Contact />
      <Footer />
      <FooterBottom />
      </div>
    </div>

  );
}

export default App;
