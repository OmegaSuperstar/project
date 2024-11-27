import { useState } from "react";
import { useNavigate } from "react-router-dom"; // For programmatic navigation
import Loading from "./Loading/Loading"; // Loading spinner component
import './champions.css'; // Component-specific styling

function Champions() {
    const [champions, setChampions] = useState([]); // Stores champion data
    const [searchTerm, setSearchTerm] = useState(""); // Tracks user search input
    const [isLoading, setIsLoading] = useState(false); // Tracks loading state
    const [sortCriteria, setSortCriteria] = useState("name"); // Tracks selected sorting criteria
    const navigate = useNavigate(); // Provides navigation functionality

    const fetchData = async () => {
        // Fetches champion data from the API and filters/sorts based on input
        setIsLoading(true);
        try {
            const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json`);
            if (!response.ok) throw new Error("Failed to fetch data");

            const result = await response.json();
            const championsList = Object.values(result.data);

            // Filters champions based on the search term
            const filteredChampions = championsList.filter(champion =>
                champion.name.toLowerCase().includes(searchTerm.toLowerCase())
            );

            // Sorts champions based on selected criteria
            const sortedChampions = filteredChampions.sort((a, b) => {
                if (sortCriteria === "name") {
                    return a.name.localeCompare(b.name);
                } else if (sortCriteria === "title") {
                    return a.title.localeCompare(b.title);
                } else if (sortCriteria === "tags") {
                    return (a.tags[0] || "").localeCompare(b.tags[0] || "");
                }
                return 0;
            });

            setChampions(sortedChampions); // Updates state with the sorted champions
        } catch (error) {
            console.log(error); // Logs any errors
        } finally {
            setIsLoading(false); // Updates loading state
        }
    };

    const handleSearch = () => {
        // Triggers fetching data only when the search term is not empty
        if (searchTerm.trim() === "") {
            setChampions([]);
        } else {
            fetchData();
        }
    };

    const handleChampionClick = (championId) => {
        // Navigates to the ChampionDetails page for the selected champion
        navigate(`/champion/${championId}`);
    };

    return (
        <div className="ChampionSearchDiv">
            {isLoading && <Loading />} {/* Displays loading spinner if data is loading */}
            <h1>Champions</h1>
            <input 
                type="text" 
                value={searchTerm} 
                onChange={(e) => setSearchTerm(e.target.value)} 
                placeholder="Search for a champion..." // Search input field
            />
            <button onClick={handleSearch}>Search</button> {/* Button to trigger search */}
            <select 
                value={sortCriteria} 
                onChange={(e) => setSortCriteria(e.target.value)} 
                className="ChampionSortSelect"
            >
                {/* Dropdown menu for sorting */}
                <option value="name">Sort by Name</option>
                <option value="title">Sort by Title</option>
                <option value="tags">Sort by Role</option>
            </select>
            <div className="ChampionOutputDiv">
                {champions.length > 0 ? (
                    champions.map((champion) => (
                        <div 
                            key={champion.id} 
                            onClick={() => handleChampionClick(champion.id)} 
                            className="ChampionItem" // Clickable champion card
                        >
                            <div className="ChampionImageContainer">
                                <img
                                    src={`https://ddragon.leagueoflegends.com/cdn/14.3.1/img/champion/${champion.image.full}`}
                                    alt={champion.name}
                                    className="ChampionImage" // Champion thumbnail
                                />
                            </div>
                            <h2 className="ChampionName">{champion.name}</h2> {/* Champion name */}
                            <h3 className="ChampionTitle">{champion.title}</h3> {/* Champion title */}
                            <p className="ChampionRoles">Roles: {champion.tags.join(", ")}</p> {/* Champion roles */}
                        </div>
                    ))
                ) : (
                    !isLoading && <p>No champions found.</p> // Fallback when no results
                )}
            </div>
        </div>
    );
}

export default Champions; // Export for use in other parts of the app
