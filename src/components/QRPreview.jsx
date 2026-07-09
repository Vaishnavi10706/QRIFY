import React from "react";
import QRCode from "react-qr-code";

function QRPreview({ qrValue }) {
  return (
    <>
      <div className="qr-box">
        {!qrValue ? <p>QR code appers here</p> : (<QRCode value={qrValue}/>) }
      </div>
      <div>
        <button>Copy QR</button>
        <button>Download QR</button>
      </div>
    </>
  );
}

export default QRPreview;
