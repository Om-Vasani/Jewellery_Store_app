import React from 'react'
import ProductCard from '../components/ProductCard.jsx'

export default function Home(){
  return (
    <section id="home" className="header-hero">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif mb-4">Timeless craftsmanship. <span className="text-gold">Modern elegance.</span></h1>
            <p className="small-muted mb-6">Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.</p>
            <div className="flex gap-4">
              <button className="btn-gold">Shop Now</button>
              <button className="px-4 py-2 rounded-md border">Learn More</button>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ProductCard title="Solitaire Ring" price="₹85,000" emoji="💍" />
              <ProductCard title="Gold Pendant" price="₹12,500" emoji="📿" />
              <ProductCard title="Classic Necklace" price="₹45,000" emoji="📿" />
              <ProductCard title="Diamond Studs" price="₹32,000" emoji="💎" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
