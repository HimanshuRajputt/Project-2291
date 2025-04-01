import { useState } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import TrueFocus from "./TrueFocus";
// import { UserContext } from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);
  // const { userlogin } = useContext(UserContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("authToken")

  const handleScanClick = () => {
    if (token) {
      navigate("/Scanner");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Background Images */}
      {/* <div className="fixed inset-0 z-0">
        <img
          src="https://ik.imagekit.io/m9qnay09g/qr-scan.gif?updatedAt=1737218123677"
          alt="Background Pattern"
          className="absolute top-0 right-0 w-64 h-64 object-cover opacity-10 rotate-45"
        />
        <img
          src="https://ik.imagekit.io/m9qnay09g/qr-scan.gif?updatedAt=1737218123677"
          alt="Background Pattern"
          className="absolute bottom-0 left-0 w-72 h-72 object-cover opacity-10 -rotate-45"
        />
      </div> */}

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Column */}
          <div className="flex-1 text-center md:text-left space-y-8">
            <div className="relative w-full max-w-lg mx-auto md:mx-0">
              <img
                src="https://ik.imagekit.io/m9qnay09g/Order%20food%20(2).gif"
                alt="Food ordering animation"
                className="relative w-full h-auto rounded-2xl "
              />
            </div>

            <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 ">
              <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Effortlessly track your meals nutritional value with our QR Code
                Calories Calculator. Simply scan the QR code of your dish, and
                get instant insights into its calorie count and nutritional
                breakdown.
              </p>
            </div>

            <button
              onClick={handleScanClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 hover:gap-4 mx-auto md:mx-0"
            >
              <span className="relative z-10 flex items-center gap-2">
                Scan QR
                <ArrowRight
                  className={`w-5 h-5 transition-transform duration-300 ${
                    isHovered ? "translate-x-1" : ""
                  }`}
                />
              </span>
              <Sparkles
                className={`absolute right-4 w-5 h-5 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />
            </button>
          </div>
          {/* Right Column */}
          <div className="flex-1 relative">
            <TrueFocus
              sentence="Scan Your Dish"
              manualMode={false}
              blurAmount={4}
              borderColor="black"
              animationDuration={1}
              pauseBetweenAnimations={1}
            />
            <h2 className="text-5xl font-bold text-center"></h2>
            <h1 className="text-6xl font-bold mb-10 text-center">
              Track your Calories
            </h1>
            <div className="relative transform hover:scale-105 transition-transform duration-500">
              <img
                src="https://ik.imagekit.io/m9qnay09g/QR%20Code%20(1).gif"
                alt="QR Code verification illustration"
                className="w-full h-auto max-w-lg mx-auto rounded-2xl "
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Quick Scan",
              description: "Instantly scan QR codes on your meals",
              image: "https://ik.imagekit.io/m9qnay09g/QR%20Code%20(2).gif",
            },
            {
              title: "Detailed Analysis",
              description: "Get comprehensive nutritional information",
              image: "https://ik.imagekit.io/m9qnay09g/Analysis.gif",
            },
            {
              title: "Health Insights",
              description: "Track your daily nutritional intake",
              image:
                "https://ik.imagekit.io/m9qnay09g/Prevent%20epidemic%20rebound.gif",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-40 h-40 mx-auto mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white/90 backdrop-blur-sm border-t border-gray-200 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600">
              © 2025 Calorie Counter. All rights reserved.
            </p>
            <div className="flex gap-8">
              {["Privacy", "Terms", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    (window.location.href = `/${item.toLowerCase()}`)
                  }
                  className="relative text-gray-600 hover:text-blue-600 transition-colors duration-300 group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
