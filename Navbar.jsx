import React from 'react'

export default function Navbar(){
  return (
    <header className="bg-white shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-gold">Amidip</div>
          <div className="text-sm text-muted hidden sm:block">Jewellers</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Catalog</a>
          <a href="#" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border border-gold text-gold">Cart</button>
        </div>
      </div>
    </header>
  )
}
