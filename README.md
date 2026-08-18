# QRify 🔗

A modern and responsive QR Code Generator built with **React** that instantly converts website URLs into QR codes. Users can generate, copy, and download QR codes with built-in URL validation for a seamless experience.

---

## 📖 About

QRify was created to simplify sharing website links. Instead of manually typing long URLs, users can generate a QR code that can be scanned instantly on any mobile device.

The application focuses on a clean user experience by validating URLs before generating QR codes, providing copy-to-clipboard functionality, and allowing QR codes to be downloaded as PNG images.

---

## ✨ Features

- 🔗 Generate QR codes from website URLs
- ✅ URL validation using JavaScript's `URL` API
- 📋 Copy website URL to clipboard
- 📥 Download generated QR code as a PNG image
- 🚫 Prevent invalid URL generation
- 🔒 Disabled action buttons until a QR code is generated
- ⚡ Instant QR code generation
- 🌙 Dark Mode
- 🎨 Custom QR colors
- 📱 Responsive and clean user interface

---

## 🛠️ Built With

- React
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- react-qr-code
- html-to-image

---

## 📂 Project Structure

```
src/
│── components/
│   ├── Navbar.jsx
│   ├── QRForm.jsx
│   ├── QRPreview.jsx
│   └── Footer.jsx
│
│── App.jsx
│── App.css
│── main.jsx
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Vaishnavi10706/qrify.git
```

### 2. Navigate into the project

```bash
cd qrify
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173
```

---

## 📸 Preview

<img width="1137" height="667" alt="image" src="https://github.com/user-attachments/assets/cb49d410-ce37-4f71-b033-262d6b7d9527" />

---

## 💡 How It Works

1. Enter a valid website URL.
2. Click **Generate QR**.
3. The application validates the URL.
4. A QR code is generated instantly.
5. Copy the website URL or download the QR code as a PNG.

---

## 📚 What I Learned

While building this project, I gained hands-on experience with:

- React Hooks (`useState`, `useRef`)
- Component-based architecture
- Props and state management
- Conditional rendering
- Form validation
- Browser Clipboard API
- DOM manipulation using refs
- Downloading images from DOM elements
- Working with third-party React libraries
- Asynchronous JavaScript (`async/await`)

---

## 🔮 Future Enhancements

- 🖼️ Logo inside QR code
- 📜 QR generation history
- 🔔 Toast notifications
- 📱 Enhanced mobile responsiveness
- 📊 Scan analytics support
- 🔗 URL shortening integration

---

## 👩‍💻 Author

**Vaishnavi**

If you found this project useful, consider giving it a ⭐ on GitHub!
