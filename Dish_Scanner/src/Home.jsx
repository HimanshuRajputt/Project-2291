import React from "react";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from "axios";
import { FoodContext } from "./FoodContext"; // Import the context
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Home() {
  const { updateFoodData } = React.useContext(FoodContext); // Use context to get the update function
  const navigate = useNavigate(); // Get the navigate function

  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh",borderImage:"src(Project-2291\Dish_Scanner\public\c895b628-fd97-4273-ba2a-a15d64a454de.webp)",backgroundSize:"cover"}}>
      <BarcodeScannerComponent
        width={500}
        height={500}
        onUpdate={(err, result) => {
          if (result) {
            axios
              .get(`https://world.openfoodfacts.org/api/v0/product/${result.text}`)
              .then((response) => {
                console.log(response.data);
                updateFoodData(response.data); // Update context with the fetched data
                navigate("/edit"); // Navigate to the Edit page after updating the context
              });
          }
        }}
      />
    </div>
  );
}

export default Home;
