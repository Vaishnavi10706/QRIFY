import React,{ useState } from "react";
import QRCode from "react-qr-code";

function QRPreview({ qrValue,copyUrl }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try{
      await navigator.clipboard.writeText(copyUrl);
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      },2000)
    } catch{
      alert('Failed to copy the URL.')
    }
  }
  return (
    <>
      <div className="qr-box">
        {!qrValue ? <p>QR code appers here</p> : (<QRCode value={qrValue}/>) }
      </div>
      <div>
        <button type="button" onClick={handleCopy} disabled={!qrValue}>{copied ? "Copied ✅" : "Copy QR"}</button>
        <button type="button" disabled={!qrValue}>Download QR</button>
      </div>
    </>
  );
}

export default QRPreview;
