import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-12 border-t bg-white">
      <div className="container py-6 text-sm small-muted flex justify-between items-center">
        <div>© {new Date().getFullYear()} Amidip Jewellers</div>
        <div className="flex items-center gap-4">
          <a className="small-muted" href="#">Privacy</a>
          <a className="small-muted" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}
