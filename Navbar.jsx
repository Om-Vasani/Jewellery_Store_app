import React from 'react'
export default function Navbar(){
  return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-serif text-gold">Amidip</div>
          <div className="text-sm text-muted hidden sm:block">Jewellers</div>
        </div>

        <nav className="hidden md:flex gap-8 items-center text-sm">
          <a href="#" className="hover:text-gold">Home</a>
          <a href="#catalog" className="hover:text-gold">Catalog</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border border-gold text-gold hidden sm:inline">Cart</button>
          <button className="sm:hidden p-2 rounded-md border">Menu</button>
        </div>
      </div>
    </header>
  )
}
