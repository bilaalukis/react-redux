// Import React and ReactDom lib
import React from 'react';  // lib that defines what a component is and how multiple components work together
import ReactDOM from 'react-dom/client';  // lib that knows how to get a component to show up in the browser

// Get a reference to the div with ID root
const el = document.getElementById('root');

// Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// Create a component
function App() {
    return <h1>Hi there!</h1>;
}

// Shpw the component on the screen
root.render(<App />);