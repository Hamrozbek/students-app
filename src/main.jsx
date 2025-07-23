import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { GlobalContext } from './Context/Context.jsx'

createRoot(document.getElementById('root')).render(
    <GlobalContext>
        <App />
    </GlobalContext>
)
