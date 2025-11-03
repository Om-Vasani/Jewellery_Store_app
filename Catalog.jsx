import React from 'react'
import ProductCard from '../components/ProductCard.jsx'

export default function Catalog(){
  const items = [
    {title:'Gold Pendant', price:'₹12,500', emoji:'📿'},
    {title:'Classic Necklace', price:'₹45,000', emoji:'📿'},
    {title:'Diamond Studs', price:'₹32,000', emoji:'💎'},
    {title:'Gold Bangle', price:'₹18,000', emoji:'💫'}
  ]
  return (
    <section id="catalog" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-4">Catalog</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it,i)=>(<ProductCard key={i} title={it.title} price={it.price} emoji={it.emoji} />))}
        </div>
      </div>
    </section>
  )
}
