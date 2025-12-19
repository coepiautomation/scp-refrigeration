import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// Add this at the bottom of your main.jsx
window.addEventListener('load', () => {
  const observer = new MutationObserver(() => {
    const widget = document.querySelector('iframe[src*="retellai.com"]') || 
                   document.querySelector('#retell-widget');
    if (widget) {
      widget.style.left = '20px';
      widget.style.right = 'auto';
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });
});