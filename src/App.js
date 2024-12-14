import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'

const App = () => {
  return (
    <div className="app">
      {/* Header Section */}
      <Header />

      {/* Main Section */}
      <main>
        {/* Main Intro Section */}
        <section id="main">
          <Main />
        </section>

        {/* About Me Section */}
        <section id="about-me">
          <AboutMe />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        {/* Skills Section */}
        <section id="skills">
          <Skills />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <Projects />
        </section>
      </main>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;
