import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Teachers from './components/Teachers';
import Scholars from './components/Scholars';
import Courses from './components/Courses';
import Fees from './components/Fees';
import AdmissionForm from './components/AdmissionForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Teachers />
      <Scholars />
      <Courses />
      <Fees />
      <AdmissionForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
