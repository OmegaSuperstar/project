import React, { useEffect, useState } from 'react';
import ScrollingImageBar from './ScrollingImageBar';
import './ChampionLibrary.css';

const ChampionLibrary = () => {
  const [champions, setChampions] = useState([]); // Initialize with an empty array

  // Fetch champion data from the API
  useEffect(() => {
    const fetchChampions = async () => {
      try {
        const response = await fetch('https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json');
        const data = await response.json();
        const championsArray = Object.values(data.data); // Convert object to an array
        setChampions(championsArray);
      } catch (error) {
        console.error('Error fetching champion data:', error);
      }
    };

    fetchChampions();
  }, []);

  return (
    <div className="champion-library">
      {champions.length > 0 ? (
        <>
          <div className="image-bar left">
            <ScrollingImageBar champions={champions} />
          </div>
          <div className="image-bar right">
            <ScrollingImageBar champions={champions} />
          </div>
        </>
      ) : (
        <p>Loading champions...</p>
      )}
    </div>
  );
};

export default ChampionLibrary;