import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

let El = <a href='https://google.com' target='_blank'>Visit Google</a>;
let El2 = React.createElement('a', {href: 'https://google.com', target: '_black'}, 'Visit Google');
createRoot(document.getElementById('root')).render(
  <div>
    <App />
    {El}
    <br />
    {El2}
  </div>
)
