import { useState } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import './App.css';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#1a1a2e] text-white">
      <Header />
      <main className="p-8">
        <Section />
      </main>
      <Footer />
    </div>
  );
};

export default App;