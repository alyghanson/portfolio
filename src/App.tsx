import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Res from './pages/Res';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Intro from "./pages/Intro";
import Header from "./components/Header";

// import Intro from "./pages/Intro.tsx"
// import Layout from "./pages/Layout.tsx";
// import Home from "./pages/Home.tsx";
// import Contact from "./pages/Contact.tsx";
// import NoPage from "./pages/NoPage.tsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Intro />} />
        <Route path="portfolio" element={<Intro/>}/>
        <Route path="portfolio/res" element={<Res/>} />
        <Route path="portfolio/contact" element={<Contact/>} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
// import React from 'react';
// // import  from './logo.svg';
// import earth from './home_earth.png'

