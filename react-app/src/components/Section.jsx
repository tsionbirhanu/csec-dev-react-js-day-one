import React from "react";

const Section = () => {
  return (
        <div className="section-container">
    <section className="react-section">
      <h2 className="text-3xl font-semibold text-[#bb86fc]">What is React?</h2>
      <p className="mt-3 text-lg">
        React is a JavaScript library developed by Facebook for building user interfaces. It allows developers to create reusable UI components and efficiently update the UI based on state changes. React's component-based architecture promotes code reusability and maintainability.
      </p>
      <h2 className="text-[#bb86fc]">Features of React</h2>
      <ul>
        <li>Component-Based Architecture</li>
        <li>Declarative Syntax</li>
        <li>Virtual DOM</li>
        <li>Unidirectional Data Flow</li>
        <li>Open source</li>
      </ul>
    </section>
    <section className="tailwind-section">
      <h2 className="text-3xl font-semibold text-[#bb86fc]">What is Tailwind CSS?</h2>
      <p className="mt-3 text-lg">
        Tailwind CSS is a utility-first CSS framework that enables developers to build custom designs without writing custom CSS. It provides a set of low-level utility classes that can be combined to create any design directly in your HTML or JSX.
      </p>
      <h2 className="text-2xl font-semibold text-[#bb86fc] mt-4">Features of Tailwind CSS</h2>
      <ul className="flex space-x-6 mt-2 list-none">
        <li>Utility-First Approach</li>
        <li>Responsive Design</li>
        <li>Customization</li>
        <li>Performance Optimization</li>
        <li>Rapid Prototyping</li>
      </ul>
    </section>
  </div>
   
  );
};

export default Section;