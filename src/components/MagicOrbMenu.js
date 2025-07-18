import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MagicOrbMenu.css';
import { motion } from 'framer-motion';

const menuItems = [
  { label: 'Projects', route: '/projects', angle: 0 },
  { label: 'Experience', route: '/expe', angle: 120 },
  { label: 'Certifications', route: '/certi', angle: 240 },
];

const MagicOrbMenu = () => {
  const [showItems, setShowItems] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setShowItems(true);
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowItems(false);
    }, 10000); // slight delay so user can click
  };

  return (
    <div className="orb-container">
      <div
        className="central-orb"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="orb-glow" />
        <span className="orb-label">Menu</span>

        {showItems &&
          menuItems.map((item, index) => {
            const radius = 120;
            const x = radius * Math.cos((item.angle * Math.PI) / 180);
            const y = radius * Math.sin((item.angle * Math.PI) / 180);
            return (
              <motion.div
                key={index}
                className="orb-item"
                style={{ top: `calc(50% + ${y}px)`, left: `calc(50% + ${x}px)` }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ delay: 0.1 * index }}
                onClick={() => navigate(item.route)}
              >
                {item.label}
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default MagicOrbMenu;
