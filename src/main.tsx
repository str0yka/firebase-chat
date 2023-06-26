import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

firebase.initializeApp({
  apiKey: "AIzaSyAQlPVEnQTlF1ihLwxx98MxKXIMYpOziOk",
  authDomain: "fir-chat-d05c1.firebaseapp.com",
  projectId: "fir-chat-d05c1",
  storageBucket: "fir-chat-d05c1.appspot.com",
  messagingSenderId: "37442991437",
  appId: "1:37442991437:web:c0b0d25d7af950a909b304",
  measurementId: "G-HKT79JHFJD"
})

const auth = firebase.auth()
const firestore = firebase.firestore()
export const AppContext: React.Context<any> = createContext(null)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <AppContext.Provider
      value={{
        auth,
        firestore
      }}
    >
      <BrowserRouter>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </BrowserRouter>
    </AppContext.Provider>,
)
