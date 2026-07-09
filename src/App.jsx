import { useState } from 'react'
import Navbar from './components/Navbar'
import QRForm from './components/QRForm'
import QRPreview from './components/QRPreview'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [qrValue, setQrValue] = useState("");
  const handleGenerate = () => {
  setQrValue(inputUrl);
  };
  return (
    <div className='card'>
    <Navbar/>
    <QRForm inputUrl={inputUrl} setInputUrl={setInputUrl} handleGenerate={handleGenerate}/>
    <QRPreview qrValue={qrValue}/>
    <Footer/>
    </div>
  )
}

export default App
