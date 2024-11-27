import React from 'react';
import './ScrollingImageBar.css';

const ScrollingImageBar = ({ champions }) => {
  if (!champions || champions.length === 0) return null; // Ensure champions array is not empty

  return (
    <div className="scrolling-bar">
      <div className="scrolling-bar-inner">
        {champions.map((champion, index) => (
          <img
            key={`${champion.id}-${index}`}
            src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
            alt={champion.name}
            className="champion-image"
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollingImageBar;
