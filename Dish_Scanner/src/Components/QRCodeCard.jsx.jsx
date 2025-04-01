/* eslint-disable react/prop-types */
import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import "../styles/QRCard.css";
// import axios from "axios";

function QRCodeCard({ dish, dishName, jsonData, onDelete }) {
  const [qrCodeVisible, setQrCodeVisible] = useState(false);
    // const token = localStorage.getItem("authToken");

  const generateQRCode = () => {
    setQrCodeVisible(true);
  };

  const closeQRCode = () => {
    setQrCodeVisible(false);
  };

  // const downloadQRCode = () => {
  //   const svg = document.getElementById(`qrCode-${dish._id}`);
  //   const serializer = new XMLSerializer();
  //   const svgBlob = new Blob([serializer.serializeToString(svg)], {
  //     type: "image/svg+xml",
  //   });
  //   const url = URL.createObjectURL(svgBlob);
  //   const link = document.createElement("a");
  //   link.href = url;
  //   link.download = `${dish._id}-qr-code.svg`;
  //   link.click();
  //   URL.revokeObjectURL(url);
  // };
const downloadQRCode = () => {
  const svg = document.getElementById(`qrCode-${dish._id}`);
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const img = new Image();

  img.onload = () => {
    const size = img.width + 40; // QR size + padding
    canvas.width = canvas.height = size;

    ctx.fillStyle = "#fff"; // White background
    ctx.fillRect(0, 0, size, size);
    ctx.drawImage(img, 20, 20); // Centered QR

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${dish._id}-qr.png`;
    link.click();
  };

  img.src = URL.createObjectURL(
    new Blob([new XMLSerializer().serializeToString(svg)], {
      type: "image/svg+xml",
    })
  );
};


  const deleteDish =  () => {
    try {
      // await axios.delete(`http://localhost:5000/dishes/${dish._id}`, {
      //   headers: { token },
      // });
      onDelete(dish._id); // Callback to notify parent about deletion
    } catch (error) {
      console.error("Error deleting the dish:", error);
    }
  };

  return (
    <div className="qr-card-wrapper">
      <h2 className="qr-card-title">{dishName}</h2>
      <ul className="qr-item-list">
        {dish.items.map((item, index) => (
          <li className="qr-item" key={index}>
            <span>{item.name}</span>
            <span>
              Qty: {item.quantity}, Cal: {item.calories}
            </span>
          </li>
        ))}
      </ul>
      {!qrCodeVisible ? (
        <div>
          <button className="qr-btn qr-btn-generate" onClick={generateQRCode}>
            Generate QR Code
          </button>
          <div className="edit-delete-div">
            <Link to={`/edit/${dish._id}`} className="qr-edit-link-wrapper">
              <button className="flex items-center gap-2 bg-gradient-to-r from-black to-blue-800 text-white font-semibold py-3 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition duration-300">
                Edit
              </button>
            </Link>
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-800 to-black to-red-500  text-white font-semibold py-3 px-10 rounded-xl shadow-lg hover:shadow-xl transform hover:translate-y-[-2px] transition duration-300"
              onClick={deleteDish}
            >
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="qr-code-container">
          <QRCode id={`qrCode-${dish._id}`} value={jsonData} size={120} />
          <div className="QR-Button-bottom-div">
            <button className="qr-btn qr-btn-download" onClick={downloadQRCode}>
              Download QR
            </button>
            <button className="qr-btn qr-btn-close" onClick={closeQRCode}>
              Close QR
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QRCodeCard;
