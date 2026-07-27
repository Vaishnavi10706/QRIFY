import React,{ useState, useRef  } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

function QRPreview({ qrValue,copyUrl,fgColor,bgColor }) {
  const [copied, setCopied] = useState(false);
  const qrRef = useRef(null);
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
  const handleDownload = async () => {
    try{
      const dataUrl = await toPng(qrRef.current)
      const link = document.createElement("a");
      link.href = dataUrl
      link.download = "qr_code.png"
      link.click();
    } catch {
      alert('Failed to download the QR code')
    }
  }
  return (
    <>
      <div className="qr-box" ref={qrRef}>
        {!qrValue ? <p>QR code appers here</p> : (<QRCode value={qrValue} fgColor={fgColor} bgColor={bgColor}/>) }
      </div>
      <div>
        <button type="button" onClick={handleCopy} disabled={!qrValue}>{copied ? "Copied ✅" : "Copy QR"}</button>
        <button type="button" onClick={handleDownload} disabled={!qrValue}>Download QR</button>
      </div>
    </>
  );
}

export default QRPreview;
