import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import { App } from './App.jsx'
import { ToastContainer, Bounce } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
      transition={Bounce}
      progressClassName="toastProgress"
      bodyClassName="toastBody"
    />
  </StrictMode>,
)
