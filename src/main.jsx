// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './styles/global.css';

// createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );



// import React from "react";
// import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
// import "./styles/global.css";

// import EasterEggProvider from "./components/EasterEgg/EasterEggProvider";

// createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <EasterEggProvider>
//       <App />
//     </EasterEggProvider>
//   </React.StrictMode>
// );




















import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/global.css";

import EasterEggProvider from "./components/EasterEgg/EasterEggProvider";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EasterEggProvider>
      <App />
    </EasterEggProvider>
  </React.StrictMode>
);




