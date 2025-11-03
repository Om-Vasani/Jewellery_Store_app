import React, {useState, useEffect, useRef} from 'react'
let localResponses = {
  hello: "Hello! How can I help you with jewellery today?",
  price: "You can check product price on the product card — or tell me which item and I'll fetch details.",
  default: "Thanks for your message! Our team will respond shortly."
}

export default function Chat(){
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([{from:'bot', text:'Hi — ask me about products, prices or orders.'}])
  const [value, setValue] = useState('')
  const boxRef = useRef()

  useEffect(()=>{
    if(open && boxRef.current){ boxRef.current.scrollTop = boxRef.current.scrollHeight }
  },[messages,open])

  async function sendMsg(){
    if(!value.trim()) return
    const text = value.trim()
    setMessages(m=>[...m, {from:'user', text}])
    setValue('')
    const key = text.toLowerCase()
    let reply = localResponses.default
    if(key.includes('hello')||key.includes('hi')) reply = localResponses.hello
    else if(key.includes('price')||key.includes('cost')) reply = localResponses.price

    setTimeout(()=> setMessages(m=>[...m, {from:'bot', text:reply}]), 600)

    try{
      const { logMessage } = await import('./firebaseConfig.js')
      if(logMessage) logMessage({text, at: new Date().toISOString()})
    }catch(e){}
  }

  return (
    <div className="chat-box">
      <div style={{position:'relative'}}>
        {open && (
          <div className="card" style={{marginBottom:8}}>
            <div ref={boxRef} style={{maxHeight:320,overflowY:'auto',padding:8}}>
              {messages.map((m,i)=>(
                <div key={i} style={{marginBottom:8, textAlign: m.from==='user' ? 'right' : 'left'}}>
                  <div style={{display:'inline-block',padding:'8px 10px',borderRadius:8, background: m.from==='user' ? '#f3f4f6' : 'white', boxShadow:'0 6px 20px rgba(0,0,0,0.04)'}}>
                    <div style={{fontSize:14}}>{m.text}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{display:'flex',gap:8,marginTop:8}}>
              <input value={value} onChange={e=>setValue(e.target.value)} placeholder="Ask about products, price, orders..." className="flex-1 p-2 border rounded-md" />
              <button onClick={sendMsg} className="px-3 py-2 rounded-md bg-gold text-white">Send</button>
            </div>
          </div>
        )}
        <button onClick={()=>setOpen(s=>!s)} className="p-3 rounded-full shadow-md" title="Chat with us" aria-label="chat">
          💬
        </button>
      </div>
    </div>
  )
}
