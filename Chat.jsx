import React, {useState, useEffect, useRef} from 'react'
import useChatAI from '../lib/useChatAI.js'

export default function Chat(){
  const [open,setOpen]=useState(false)
  const [messages,setMessages]=useState([{from:'bot',text:'Hi — ask me about products.'}])
  const [value,setValue]=useState('')
  const boxRef=useRef()
  const {ask}=useChatAI()

  useEffect(()=>{ if(open && boxRef.current) boxRef.current.scrollTop = boxRef.current.scrollHeight },[messages,open])

  async function send(){
    if(!value.trim()) return
    const text=value.trim()
    setMessages(m=>[...m,{from:'user',text}])
    setValue('')
    const ai = await ask(text)
    setMessages(m=>[...m,{from:'bot',text:ai.text}])
  }

  return (
    <div className="fixed right-5 bottom-5 z-50">
      {open && (
        <div className="card mb-3 w-80">
          <div ref={boxRef} style={{maxHeight:280, overflowY:'auto'}} className="space-y-2 p-2">
            {messages.map((m,i)=>(
              <div key={i} className={m.from==='user'?'text-right':'text-left'}>
                <div className="inline-block p-2 rounded-md" style={{background: m.from==='user' ? '#f3f4f6' : 'white'}}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="p-2 flex gap-2">
            <input value={value} onChange={e=>setValue(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Ask about products, price..." />
            <button onClick={send} className="btn-gold">Send</button>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(s=>!s)} className="p-3 rounded-full bg-white shadow-md border">💬</button>
    </div>
  )
}
