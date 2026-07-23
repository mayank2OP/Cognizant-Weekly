// Output: Renders the Home, About, and Contact components sequentially on the main page
import React from 'react';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div>
      <Home />
      <About />
      <Contact />
    </div>
  );
}

export default App;
