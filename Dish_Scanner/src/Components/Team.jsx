import  { useState } from "react";
import Bikash from "../assets/Bikash.jpg";
import Akash from "../assets/Akash.jpg";
import Himanshu from "../assets/Himanshu.jpg";
import Siddhesh from "../assets/Siddhesh.jpg";
import { Link } from "react-router-dom";
const Team = () => {
  // Initialize state
  const [isAdminVisible, setIsAdminVisible] = useState(false);

  const teamMembers = [
    {
      name: "Bikash Prasad Barnwal",
      role: "Director of Operations + Analytics",
      image: Bikash,
    },
    {
      name: "Himanshu Rajput",
      role: "Managing Director",
      image: Himanshu,
    },
    {
      name: "Siddhesh Suryakant Kolambekar",
      role: "Digital Strategist",
      image: Siddhesh,
    },
    {
      name: "Akash",
      role: "Digital Strategist",
      image: Akash,
    },
  ];
  const handleHeaderHover = () => {
    setIsAdminVisible(true);
  };

  return (
    <div className="mt-1 bg-gradient-to-r from-orange-100 via-white to-blue-100 py-16">
      <div className="relative flex justify-center items-center mb-12">
        {/* Admin Button */}
        {isAdminVisible && (
          <Link to="/all-dishes">
            <button className="fixed top-20 right-2 bg-blue-500 text-white px-4 py-2 rounded-lg z-50">
              Admin
            </button>
          </Link>
        )}

        {/* Heading Section */}
        <div
          className="flex items-center cursor-pointer"
          onMouseEnter={handleHeaderHover}
        >
          <div className="absolute w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent left-1/2 -translate-x-32 top-1/2"></div>
          <h1 className="text-4xl font-extrabold text-center text-gray-800 px-8">
            Meet Our Team!
          </h1>
          <div className="absolute w-24 h-1 bg-gradient-to-l from-blue-500 to-transparent right-1/2 translate-x-32 top-1/2"></div>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8 lg:px-24">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative bg-gradient-to-b from-blue-100 via-white to-gray-50 rounded-tl-[2rem] rounded-br-[2rem] shadow-lg hover:shadow-xl transition-transform transform hover:scale-105"
          >
            <div className="relative">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-96 object-cover rounded-tl-[2rem] rounded-br-[2rem]"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold text-gray-800 group-hover:text-teal-500 transition-colors">
                {member.name}
              </h2>
              <p className="text-gray-600 mt-2">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
