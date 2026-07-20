import { useState } from 'react'
import Navbar from './components/Navbar'
import QRForm from './components/QRForm'
import QRPreview from './components/QRPreview'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [inputUrl, setInputUrl] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [error,setError] = useState("")
  const handleGenerate = () => {
    if(inputUrl.trim() === ""){
      setError('Please enter a website URL.')
      return
    }
    try{
      new URL(inputUrl)
      setError("")
      setQrValue(inputUrl);
    }catch {
      setError("Please enter a valid website URL.");
      return
    }
  };
  return (
    <div className='card'>
    <Navbar/>
    <QRForm inputUrl={inputUrl} setInputUrl={setInputUrl} handleGenerate={handleGenerate} error={error}/>
    <QRPreview qrValue={qrValue} copyUrl={qrValue}/>
    <Footer/>
    </div>
  )
}

export default App
