import { useState } from 'react'
import Navbar from './components/Navbar'
import QRForm from './components/QRForm'
import QRPreview from './components/QRPreview'
import Footer from './components/Footer'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className='card'>
    <Navbar/>
    <QRForm/>
    <QRPreview/>
    <Footer/>
    </div>
  )
}

export default App
