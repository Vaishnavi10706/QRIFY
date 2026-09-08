# 🔗 QRify - QR Code Generator

A modern and responsive **QR Code Generator** built with **React and Vite**. QRify allows users to instantly convert website URLs into QR codes with built-in validation, customization options, clipboard support, and PNG downloads.

🔗 **Live Demo:** [QRify](https://qrify-swart.vercel.app/)

---

## 📖 Overview

QRify simplifies the process of sharing website links. Instead of manually typing or copying long URLs, users can generate a scannable QR code that can be accessed instantly from any compatible mobile device.

The application focuses on delivering a simple and intuitive user experience while incorporating practical features such as URL validation, QR customization, clipboard functionality, and image downloads.

---

## ✨ Features

* 🔗 Generate QR codes from website URLs
* ✅ Validate URLs using JavaScript's native `URL` API
* 🎨 Customize QR code colors
* 📋 Copy URLs to the clipboard
* 📥 Download generated QR codes as PNG images
* 🚫 Prevent QR generation for invalid URLs
* 🔒 Disable actions until a QR code is successfully generated
* 📜 QR code generation history
* ⚡ Instant QR code generation
* 🌙 Dark mode support
* 📱 Responsive design for desktop and mobile devices

---

## 🛠️ Tech Stack

### Frontend

* **React**
* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**

### Tools & Libraries

* **Vite** - Frontend build tool
* **react-qr-code** - QR code generation
* **html-to-image** - Convert QR components into downloadable images

---

## 🏗️ Project Structure

```text
src/
│
├── components/
│   ├── Navbar.jsx
│   ├── QRForm.jsx
│   ├── QRPreview.jsx
│   └── Footer.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🚀 Getting Started

Follow the steps below to run the project locally.

### 1. Clone the Repository

```bash
git clone https://github.com/Vaishnavi10706/qrify.git
```

### 2. Navigate to the Project Directory

```bash
cd qrify
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 📸 Preview

<img width="1137" height="667" alt="QRify application preview" src="https://github.com/user-attachments/assets/cb49d410-ce37-4f71-b033-262d6b7d9527" />

---

## ⚙️ How It Works

1. Enter a valid website URL.
2. The application validates the provided URL.
3. Click **Generate QR**.
4. A QR code is generated instantly.
5. Customize the QR code appearance if required.
6. Copy the original URL or download the generated QR code as a PNG image.

---

## 🧠 What I Learned

Building QRify provided hands-on experience with:

* React component-based architecture
* React Hooks, including `useState` and `useRef`
* Props and state management
* Conditional rendering
* Form and URL validation
* Browser Clipboard API
* DOM interaction using React refs
* Generating downloadable images from DOM elements
* Integrating third-party React libraries
* Asynchronous JavaScript using `async/await`
* Responsive UI development

---

## 🔮 Future Improvements

Potential features planned for future versions include:

* 🖼️ Add custom logos to QR codes
* 🔔 Toast notifications
* 📱 Additional mobile UI improvements
* 📊 QR scan analytics
* 🔗 URL shortening integration
* 💾 Persistent QR code storage

---

## 👩‍💻 Author

**Vaishnavi**

* GitHub: [@Vaishnavi10706](https://github.com/Vaishnavi10706)

---

## ⭐ Support

If you found this project useful, please consider giving the repository a **star ⭐**.

Your support is appreciated and encourages further development and improvements.

---

<p align="center">
  Built with ❤️ using React
</p>
