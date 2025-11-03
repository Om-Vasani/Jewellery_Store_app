import React from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Catalog from './pages/Catalog.jsx'
import Contact from './pages/Contact.jsx'
import Footer from './components/Footer.jsx'
import Chat from './components/Chat.jsx'

export default function App(){
  return (
    <div>
      <Navbar />
      <main>
        <Home />
        <Catalog />
        <Contact />
      </main>
      <Footer />
      <Chat />
    </div>
  )
}
