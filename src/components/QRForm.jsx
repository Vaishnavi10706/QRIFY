import React from 'react'

function QRForm({ inputUrl, setInputUrl, handleGenerate }) {
  return (
    <>
    <div>
      <input value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} placeholder='Enter your Website Link'/>
      <button onClick={handleGenerate}>Generate QR</button>
    </div>
    </>
  )
}

export default QRForm