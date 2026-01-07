import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
let JsxElement = <h1>Hello World!</h1>
import App from './App'
createRoot(document.getElementById('root')).render(
    <App />
)
