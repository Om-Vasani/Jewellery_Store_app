export default function useChatAI(){
  async function ask(prompt){
    const q = prompt.toLowerCase()
    if(q.includes('diamond')) return {text: "We have solitaire diamond rings starting at ₹55,000. Tell me size and style."}
    if(q.includes('gold') && q.includes('bangle')) return {text: "22K gold bangles start from ₹12,000 depending on weight."}
    if(q.includes('price')||q.includes('cost')) return {text: "Prices depend on metal and design. Which product are you interested in?"}
    if(q.includes('hello')||q.includes('hi')) return {text: "Hello! How can I help you today?"}
    return {text: "Sorry, I didn't get that. Please ask about products, prices, or orders."}
  }
  return {ask}
}
