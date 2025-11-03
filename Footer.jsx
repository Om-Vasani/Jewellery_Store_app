import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="container py-6 text-sm text-muted">
        © {new Date().getFullYear()} Amidip Jewellers — Crafted with care.
      </div>
    </footer>
  )
}
