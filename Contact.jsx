import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="py-10">
      <div className="container">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p className="small-muted mb-4">WhatsApp: +91-XXXXXXXXXX</p>
        <form className="grid gap-2 max-w-md">
          <input className="p-2 border rounded" placeholder="Your name" />
          <input className="p-2 border rounded" placeholder="Email or WhatsApp" />
          <textarea className="p-2 border rounded" placeholder="Message"></textarea>
          <button className="btn-gold">Send</button>
        </form>
      </div>
    </section>
  )
}
