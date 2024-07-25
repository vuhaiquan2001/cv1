import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.scss'
import './assets/Fonts/style.css'
import App from './App'
import { SoundProvider } from './components/Containers/Providers/Sound'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    // <React.StrictMode>
    <SoundProvider>
        <App />
    </SoundProvider>
    // </React.StrictMode>
)
