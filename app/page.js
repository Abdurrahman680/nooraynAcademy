'use client';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import ZoomClasses from '../components/ZoomClasses';
import Teachers from '../components/Teachers';
import Courses from '../components/Courses';
import Fees from '../components/Fees';
import AdmissionForm from '../components/AdmissionForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <ZoomClasses />
      <Teachers />
      <Courses />
      <Fees />
      <AdmissionForm />
      <Contact />
      <Footer />
    </main>
  );
}
