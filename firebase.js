import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export const firebaseConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  projectId: 'YOUR_PROJECT_ID'
}

let app=null, db=null
export function init(){ if(!app){ app = initializeApp(firebaseConfig); db = getFirestore(app) } return {app,db} }

export async function logChat(obj){ try{ if(!db) init(); if(!db) return; await addDoc(collection(db,'chat_logs'), obj) }catch(e){} }
