import React, { useState, useEffect } from "react";
import "./Card.css";
import diskSpaceLogo from "../../images/images.png"; // Import your disk space logo image
import tiredEmoji from "../../images/tired.png"; // Import your tired emoji image
import happyEmoji from "../../images/happy.png"; // Import your happy emoji image

const Card = ({ progress }) => {
  const [value, setValue] = useState(0);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (value < progress) {
        setValue(value + 1);
        setPercentage(Math.round(((value + 1) * 100) / progress)); // Update the percentage
      } else {
        clearInterval(timer); // Stop when reaching the desired progress
      }
    }, 100);

    return () => clearInterval(timer);
  }, [value, progress]);

  return (
    <div className="card">
      <div className="disk-space-header">
        <img
          src={diskSpaceLogo}
          alt="Disk Space Logo"
          className="disk-space-logo"
          width={19}
        />
        <span className="disk-space-name">Disk Space</span>
        <span className="more-info-dots"> ...</span>
      </div>
      <svg width="160" height="100">
        <circle
          cx="90"
          cy="110"
          r="70"
          stroke="#ccc"
          strokeWidth="12"
          fill="none"
          transform={`rotate(100 90 99)`} // Rotate the circle
        />
        <path
          d={`M 20 180 A 70 70 0 ${value > 0.5 ? 1 : 0} 1 ${160} 180`}
          stroke={value > 0.5 ? "#FFC107" : "#007bff"} // Change color based on value
          strokeWidth="12"
          fill="none"
        />
      </svg>
      <div className="perc">
        <img src={percentage >= 70 ? tiredEmoji : happyEmoji} alt="" />
        <div>{percentage}%</div>
        <div>C:\Downloads</div>
        <button className="button1">Disk Cleaner</button>
      </div>
    </div>
  );
};

export default Card;
