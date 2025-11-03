import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-14 border-t bg-white">
      <div className="container py-6 text-sm text-muted flex justify-between items-center">
        <div>© {new Date().getFullYear()} Amidip Jewellers</div>
        <div className="flex items-center gap-4">
          <a href="#" className="text-sm small-muted">Privacy</a>
          <a href="#" className="text-sm small-muted">Terms</a>
        </div>
      </div>
    </footer>
  )
}
