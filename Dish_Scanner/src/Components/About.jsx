import { useState } from "react";
import {
  Calculator,
  Database,
  QrCode,
  Settings,
  ChevronDown,
  Users,
  Shield,
  Clock,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("features");
  const [expandedFaq, setExpandedFaq] = useState(null);

  const faqItems = [
    {
      question: "How accurate is the calorie counting?",
      answer:
        "Our system uses a regularly updated database of verified nutritional information. Calorie counts are accurate to within ±5% for standard portions.",
    },
    {
      question: "What types of QR codes are supported?",
      answer:
        "We support our standardized JSON-based QR format that includes dish name, ingredients, and portions. The system can process both static and dynamic QR codes.",
    },
    {
      question: "Can I share this QR code with others?",
      answer:
        "Yes, you can easily share the QR code. It will provide universal access to the information, making it convenient for anyone who scans it.",
    },
    {
      question: "How can I modify the quantities of dish items?",
      answer:
        "Once a QR code is scanned, you can adjust the quantity of individual ingredients, and the app will automatically recalculate the total calorie count in real-time.",
    },
    {
      question: "Is there a backend for managing dishes and constituents?",
      answer:
        "Yes, the backend is built with Node.js and MongoDB to manage the inventory of dishes and constituent items, allowing CRUD operations for dish creation and updating calorie information.",
    },
  ];

  return (
    <div className=" mt-1 min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.2] bg-grid-white/[0.2]" />
        <div className="container mx-auto px-4 relative">
          <h1 className="text-5xl font-bold mb-6 leading-tight">
            Smart Calorie Tracker
            <span className="block text-blue-200">
              Powered by QR Technology
            </span>
          </h1>
          <p className="text-xl opacity-90 max-w-2xl leading-relaxed">
            Transform your dining experience with instant nutritional insights.
            Our advanced QR scanning technology puts detailed calorie
            information at your fingertips, making healthy choices effortless.
          </p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className=" bg-orange-50 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 overflow-x-auto">
            {["features", "how it works", "technical", "faq"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 font-medium transition-colors duration-300 border-b-2 whitespace-nowrap
                  ${
                    activeTab === tab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-blue-600"
                  }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Sections */}
      <div className=" bg-orange-50  container mx-auto px-4 py-16 ">
        {activeTab === "features" && (
          <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* QR Scanning */}
            <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <QrCode className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-4">QR Code Scanning</h2>
              <p className="text-gray-600 leading-relaxed">
                Our advanced QR scanning technology provides instant access to
                detailed nutritional information. Simply point your camera at
                any compatible QR code to receive comprehensive dish details.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Instant recognition</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span>Verified data</span>
                </li>
              </ul>
            </div>
            {/* Real-time Calculations */}
            <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Calculator className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Dynamic Tracking</h2>
              <p className="text-gray-600 leading-relaxed">
                Experience real-time calorie updates as you modify portions and
                ingredients. Our sophisticated calculation engine ensures
                accuracy while maintaining ease of use.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Multi-portion support</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Database className="w-4 h-4 text-blue-600" />
                  <span>Extensive database</span>
                </li>
              </ul>
            </div>
            {/* Customization */}
            <div className="group bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                  <Settings className="w-8 h-8 text-blue-600 group-hover:text-white" />
                </div>
              </div>
              <h2 className="text-2xl font-semibold mb-4">
                Smart Customization
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Tailor your meals to your preferences with our intuitive portion
                adjustment system. Save your modifications for quick access in
                future scans.
              </p>
              <ul className="mt-4 space-y-2 text-gray-600">
                <li className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <span>Quick modifications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Personal profiles</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === "how it works" && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">How It Works</h2>
            <p className="text-gray-600 mb-4">
              Our Smart Calorie Tracker allows you to instantly calculate and
              track the calorie content of your meals with just a QR code scan.
              Here's how it works:
            </p>
            <ol className="space-y-4 text-gray-600">
              <li className="flex items-center space-x-2">
                <QrCode className="w-6 h-6 text-blue-600" />
                <span>
                  <strong>Step 1:</strong> Scan the QR code on your food dish.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Calculator className="w-6 h-6 text-blue-600" />
                <span>
                  <strong>Step 2:</strong> The app automatically calculates the
                  total calorie count of the dish based on its ingredients and
                  portions.
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-6 h-6 text-blue-600" />
                <span>
                  <strong>Step 3:</strong> Track your food consumption and make
                  informed decisions about your dietary habits.
                </span>
              </li>
            </ol>
          </div>
        )}

        {activeTab === "technical" && (
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-3xl font-semibold mb-4">Technical Overview</h2>
            <p className="text-gray-600">
              Our Smart Calorie Tracker app is built using modern technologies
              to ensure reliability, scalability, and ease of use. Here's a
              brief overview of the technical aspects:
            </p>
            <ul className="space-y-4 text-gray-600">
              <li>
                <strong>Frontend:</strong> The frontend is built using React,
                offering a smooth and interactive user experience. The UI is
                fully responsive and optimized for both mobile and desktop
                devices.
              </li>
              <li>
                <strong>Backend:</strong> The backend is powered by Node.js and
                Express, providing a RESTful API to handle all app interactions.
                The system processes QR code data, performs calorie
                calculations, and updates the database.
              </li>
              <li>
                <strong>Database:</strong> MongoDB is used to store nutritional
                information, food dish data, and user profiles. This flexible,
                NoSQL database allows for easy management and scaling.
              </li>
              <li>
                <strong>QR Code Scanning:</strong> We use a custom QR code
                format that includes detailed information about the dish, such
                as ingredients, portion sizes, and calorie content. The QR code
                is processed by our system to extract and display the relevant
                data.
              </li>
            </ul>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                >
                  <span className="font-medium">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300
                      ${expandedFaq === index ? "transform rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`px-6 transition-all duration-300 ease-in-out
                    ${
                      expandedFaq === index
                        ? "max-h-48 py-4 opacity-100"
                        : "max-h-0 py-0 opacity-0"
                    }`}
                >
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already tracking their nutrition
            smarter.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-300">
            Download Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
