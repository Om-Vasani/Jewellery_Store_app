import React from 'react'
import ProductCard from './components/ProductCard.jsx'

export default function Home(){
  return (
    <section className="section container">
      <div className="flex flex-wrap items-center gap-6">
        <div className="flex-1 min-w-[260px]">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Timeless craftsmanship. Modern elegance.</h1>
          <p className="text-muted text-sm">Amidip Jewellers — handcrafted gold and diamond pieces with hallmark authenticity.</p>
        </div>
        <div className="w-full md:w-auto">
          <div className="card max-w-[360px]">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-muted">Featured</div>
                <div className="font-bold">Solitaire Diamond Ring</div>
              </div>
              <div className="text-4xl">💍</div>
            </div>
            <div className="flex justify-between mt-3">
              <div className="text-sm text-muted">22K Gold / GIA-certified</div>
              <div className="font-bold text-gold">₹85,000</div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-8 mb-4 text-2xl font-semibold">Popular products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <ProductCard title="Gold Pendant" price="₹12,500" emoji="📿" />
        <ProductCard title="Classic Necklace" price="₹45,000" emoji="📿" />
        <ProductCard title="Diamond Studs" price="₹32,000" emoji="💎" />
      </div>
    </section>
  )
}
