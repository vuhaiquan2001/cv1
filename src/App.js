import { useRef } from 'react'
import BallFollowMouse from './components/Animations/BallFollowMouse'
import Main from './pages/Body'
import Header from './pages/Header'

function App() {
    return (
        <div className="bg-white w-screen h-screen overflow-y-auto">
            <BallFollowMouse />

            <Header />
            <Main />
            <footer></footer>
        </div>
    )
}
export default App
