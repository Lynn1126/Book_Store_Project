import Navbar from './components/Navbar'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <main className='min-h-screen max-w-screen-2xl mx-auto px-4 py-6 font-primary'>
    <Outlet/>
    </main>
    <footer>Footer</footer>
    </>
  )
}

export default App
