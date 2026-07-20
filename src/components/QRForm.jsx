import React from 'react'

function QRForm({ inputUrl, setInputUrl, handleGenerate, error }) {
  return (
    <>
    <div>
      <input value={inputUrl} onChange={(e) => setInputUrl(e.target.value)} placeholder='Enter your Website Link'/>
      <button onClick={handleGenerate}>Generate QR</button>
      {error && <p className="error">{error}</p>}
    </div>
    </>
  )
}

export default QRForm