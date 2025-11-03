import React from 'react'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Chat from './Chat.jsx'

export default function App(){
  return (
    <div>
      <Navbar />
      <main><Home /></main>
      <Footer />
      <Chat />
    </div>
  )
}
