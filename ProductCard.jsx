import React from "react";

export default function ProductCard({ product, onAsk }) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gold/30 shadow-lg rounded-2xl p-4 hover:scale-105 transition-transform duration-300 max-w-xs mx-auto flex flex-col justify-between">
      {/* Product Image or Icon */}
      <div
        className="flex items-center justify-center rounded-xl"
        style={{
          height: 140,
          background: "linear-gradient(135deg,var(--gold),#f4e4a6)",
          fontSize: 48,
        }}
      >
        {product.icon ? (
          product.icon
        ) : (
          <img
            src={product.image}
            alt={product.name}
            className="w-28 h-28 object-contain"
          />
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3">
        <div className="flex justify-between items-center">
          <h3 className="font-serif text-gray-900 text-lg">{product.name}</h3>
          <p className="text-gold font-semibold">₹{product.price}</p>
        </div>
        <p className="text-muted text-sm mt-1">{product.desc}</p>
      </div>

      {/* Buttons */}
      <div className="flex gap-2 mt-4">
        <button
          className="flex-1 bg-gold/90 text-white font-semibold py-2 rounded-lg hover:bg-gold transition"
          onClick={() =>
            alert(`${product.name} — ${product.desc} — ₹${product.price}`)
          }
        >
          Quick View
        </button>
        <button
          className="flex-1 border border-gold text-gold font-semibold py-2 rounded-lg hover:bg-gold hover:text-white transition"
          onClick={() => onAsk(product.name)}
        >
          Ask AI
        </button>
      </div>
    </div>
  );
        }
