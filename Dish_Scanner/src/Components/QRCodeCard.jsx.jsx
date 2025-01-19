/* eslint-disable react/prop-types */
import { useState } from "react";
import QRCode from "react-qr-code";
import { Link } from "react-router-dom";
import "../styles/QRCard.css";

function QRCodeCard({ dish, dishName, jsonData, onDelete }) {
  const [qrCodeVisible, setQrCodeVisible] = useState(false);

  const generateQRCode = () => {
    setQrCodeVisible(true);
  };

  const closeQRCode = () => {
    setQrCodeVisible(false);
  };

  const downloadQRCode = () => {
    const svg = document.getElementById(`qrCode-${dish.id}`);
    const serializer = new XMLSerializer();
    const svgBlob = new Blob([serializer.serializeToString(svg)], {
      type: "image/svg+xml",
    });
    const url = URL.createObjectURL(svgBlob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${dish.id}-qr-code.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const deleteDish = () => {
    fetch(
      `https://dish-qr-scanner-default-rtdb.firebaseio.com/Dishes/${dish.id}.json`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        onDelete(dish.id); // Callback to notify parent about deletion
      })
      .catch((error) => {
        console.error("Error deleting the dish:", error);
      });
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
          <Link to={`/edit/${dish.id}`} className="qr-edit-link-wrapper">
            <button className="editbtn">Edit</button>
          </Link>
          <button className="deletebtn" onClick={deleteDish}>
            Delete
          </button>

          </div>
        </div>
      ) : (
        <div className="qr-code-container">
          <QRCode id={`qrCode-${dish.id}`} value={jsonData} size={120} />
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
