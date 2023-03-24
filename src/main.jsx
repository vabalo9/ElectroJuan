import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from "react-router-dom"
import ShoppingCartProvider from './context/ShoppingCartProvider'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB6QDbqBl33oaeQDGrBVFyPRGJWk-iLgQM",
  authDomain: "tecnojuan-351a9.firebaseapp.com",
  projectId: "tecnojuan-351a9",
  storageBucket: "tecnojuan-351a9.appspot.com",
  messagingSenderId: "342102454427",
  appId: "1:342102454427:web:53ca71b3b7e78c00b8963e"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <ShoppingCartProvider>

    <App />

    
    </ShoppingCartProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
