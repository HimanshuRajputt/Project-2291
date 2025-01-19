import  { useContext, useState } from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import { FoodContext } from "../Context/FoodContext";
import { useNavigate } from "react-router-dom";
import "../styles/Scanner.css"; // Import the styles

function Scanner() {
  
  const { updateFoodData } =useContext(FoodContext);
  const navigate = useNavigate();
  const [showScanner, setShowScanner] = useState(false);

  return (
    <div className="home-container">
      {!showScanner ? (
        <>
          <h1 className="home-title">Welcome to Dish Scanner</h1>
          <img
            src="https://ik.imagekit.io/m9qnay09g/qr-scan.gif"
            alt="Placeholder"
            className="home-image"
          />
          <button
            onClick={() => setShowScanner(true)}
            className="home-button scan-button"
          >
            Start Scanning
          </button>
        </>
      ) : (
        <>
          <h1 className="scanner-title">Scan the Barcode</h1>
          <div className="scanner-container">
            <BarcodeScannerComponent
              width="100%"
              height="100%"
              onUpdate={(err, result) => {
                if (result) {
                  try {
                    const foodObject = JSON.parse(result.text); // Parse the QR code data as an object
                    updateFoodData(foodObject); // Update the context with the parsed data
                    navigate("/Calorie");
                  } catch (e) {
                    alert("Invalid QR code data", e);
                  }
                }
              }}
            />
          </div>
          <button
            onClick={() => setShowScanner(false)}
            className="home-button back-button"
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default Scanner;
