import React from "react";

function QRHistory({ qrHistory }) {
  return (
    <section className="qr-history">
      <h2>QR History</h2>

      {qrHistory.length === 0 ? (
        <p>No QR codes generated yet.</p>
      ) : (
        qrHistory.map((item, index) => (
          <div className="history-item" key={index}>
            <p>{item.url}</p>
          </div>
        ))
      )}
    </section>
  );
}

export default QRHistory;