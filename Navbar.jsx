import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-gold">Amidip</div>
          <div className="text-sm text-muted hidden sm:block">Jewellers</div>
        </div>
        <nav className="flex items-center justify-between p-4 bg-white shadow">
  <h1 className="text-xl font-bold text-yellow-700">Amidip Jewellers</h1>
  <div className="hidden md:flex gap-6 text-gray-700">
    <a href="#home">Home</a>
    <a href="#catalog">Catalog</a>
    <a href="#contact">Contact</a>
    <a href="#cart">Cart</a>
  </div>
</nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border border-gold text-gold">Cart</button>
        </div>
      </div>
    </header>
  )
}
