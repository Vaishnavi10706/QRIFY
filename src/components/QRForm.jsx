import React from "react";

function QRForm({
  inputUrl,
  setInputUrl,
  handleGenerate,
  error,
  fgColor,
  setFgColor,
  bgColor,
  setBgColor,
}) {
  return (
    <>
      <div>
        <input
          value={inputUrl}
          onChange={(e) => setInputUrl(e.target.value)}
          placeholder="Enter your Website Link"
        />
        <div className="color-options">
          <div className="color-picker">
            <label htmlFor="fgColor">QR Color</label>

            <input
              id="fgColor"
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
            />
          </div>

          <div className="color-picker">
            <label htmlFor="bgColor">Background Color</label>

            <input
              id="bgColor"
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
            />
          </div>
        </div>
        <button onClick={handleGenerate}>Generate QR</button>
        {error && <p className="error">{error}</p>}
      </div>
    </>
  );
}

export default QRForm;
