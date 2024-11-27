import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // For accessing the dynamic URL parameter
import Loading from "./Loading/Loading"; // Loading spinner component
import './ChampionDetails.css'; // Component-specific styling

function ChampionDetails() {
    const { id } = useParams(); // Retrieves the champion ID from the route URL
    const [champion, setChampion] = useState(null); // Stores champion data
    const [isLoading, setIsLoading] = useState(true); // Tracks loading state

    useEffect(() => {
        // Fetches champion details using the ID from the URL
        const fetchChampion = async () => {
            try {
                const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion/${id}.json`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const result = await response.json();
                setChampion(result.data[id]); // Saves champion details
            } catch (error) {
                console.log(error); // Logs any errors
            } finally {
                setIsLoading(false); // Updates loading state
            }
        };

        fetchChampion();
    }, [id]); // Dependency array ensures it runs when the ID changes

    // Show loading spinner while data is fetching
    if (isLoading) return <Loading />;

    // Show an error message if the champion is not found
    if (!champion) return <p>Champion not found.</p>;

    // Displays the champion's details
    return (
        <div className="ChampionDetails">
            <h1>{champion.name}</h1> {/* Champion name */}
            <h2>{champion.title}</h2> {/* Champion title */}
            <img 
                src={`https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion.id}_0.jpg`} 
                alt={champion.name} 
                className="ChampionImage" // Large image of the champion
            />
            <p>
                {champion.blurb} {/* Short description of the champion */}
                <p className="readMore">[ read more at the Official League of Legends{" "}
                <a
                    href={`https://www.leagueoflegends.com/en-us/champions/${champion.name.toLowerCase()}/`} //link to the champion's site
                    target="_blank" // Opens link in a new tab
                >
                    champion site
                </a>
                 ]</p>
            </p>
        </div>
    );
}

export default ChampionDetails; // Export for use in other parts of the app