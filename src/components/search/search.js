// Import
import React, { useState } from "react";
import "./search.css";


// Search Component
const Search = () => {

    // Create State from Search
    const [search, setSearch] = useState(null);

    // UPDATE STATE
    const handleUserInput = (event) => {
        const { userInput } = event.target;

        setSearch({ userInput });
    };

    return (
        <div className="searchBar">
            <input type="text" placeholder="Enter a City Name" />
        </div>
    )

}


// Export Component
export default Search 