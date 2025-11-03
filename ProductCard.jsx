import React from 'react'

export default function ProductCard({title, price, emoji}){
  return (
    <div className="card">
      <div className="flex items-center gap-4">
        <div className="text-4xl">{emoji}</div>
        <div>
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-muted">{price}</div>
        </div>
      </div>
    </div>
  )
}
