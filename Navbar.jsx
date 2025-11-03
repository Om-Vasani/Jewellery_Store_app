import React from 'react'
export default function Navbar(){
  return (
    <header className="bg-white/90 sticky top-0 z-40">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-serif text-gold">Amidip</div>
          <div className="text-sm small-muted hidden sm:block">Jewellers</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a className="nav-link hover:text-gold" href="#home">Home</a>
          <a className="nav-link hover:text-gold" href="#catalog">Catalog</a>
          <a className="nav-link hover:text-gold" href="#contact">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-md border border-gold text-gold hidden sm:inline">Cart</button>
          <button className="sm:hidden p-2 rounded-md border">Menu</button>
        </div>
      </div>
    </header>
  )
}
