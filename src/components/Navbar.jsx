import React from "react";

function Navbar({ theme, toggleTheme }) {
  return (
    <>
      <div className="navbar">
        <h1>QRify</h1>
        <button onClick={toggleTheme}>
          {theme == "light" ? "🌙 Dark Mode" : "🔆 Light Mode"}
        </button>
      </div>
      <h2>Generate and download QR codes for any website URL.</h2>
    </>
  );
}
export default Navbar;
