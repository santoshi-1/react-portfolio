import React from "react";
import NavBar from "./sections/navbar";
import Header from "./sections/header";
import About from "./sections/about";
import Portfolio from "./sections/portfolio";
import Services from "./sections/services";
import Testimonials from "./sections/testimonials";
import FAQs from "./sections/faqs";
import FloatingNav from "./sections/floating-nav";
import Footer from "./sections/footer";
import Contact from "./sections/contact";


const App = () => {
  return (
    <main>
      <NavBar />
      <Header/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <FAQs />
      <Contact/>
      <Footer/>
      <FloatingNav/>
    </main>
  );
};

export default App;
