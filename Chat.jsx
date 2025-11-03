import React, {useState, useRef, useEffect} from 'react'
import useChatAI from './useChatAI.js'
import { logChat } from './firebase.js'

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
    try{ await logChat({text, at: new Date().toISOString()}) }catch(e){}
  }

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {open && (
        <div className="bg-white p-4 rounded-xl shadow-lg w-80 mb-3">
          <div ref={boxRef} style={{maxHeight:320, overflowY:'auto'}} className="space-y-2">
            {messages.map((m,i)=>(
              <div key={i} className={m.from==='user'?'text-right':'text-left'}>
                <div className="inline-block p-2 rounded-md" style={{background: m.from==='user' ? '#f3f4f6' : 'white'}}>{m.text}</div>
              </div>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            <input value={value} onChange={e=>setValue(e.target.value)} className="flex-1 p-2 border rounded" placeholder="Ask about products, price, orders..." />
            <button onClick={send} className="btn-gold">Send</button>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(s=>!s)} className="p-3 rounded-full bg-white shadow-md border border-gray-200">💬</button>
    </div>
  )
}
