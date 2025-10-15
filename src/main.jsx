import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <div className='bg-zinc-800 min-h-screen'>
            <h1 className='text-white text-center'>Daniels Blog-Folio</h1>
        </div>
    </StrictMode>,
)
