import React from 'react'
export default function ProductCard({title, price, emoji}){
  return (
    <div className="card product-hover">
      <div className="flex items-center gap-4">
        <div className="text-4xl">{emoji}</div>
        <div className="flex-1">
          <div className="font-serif text-lg">{title}</div>
          <div className="text-sm small-muted mt-1">{price}</div>
        </div>
      </div>
    </div>
  )
}
