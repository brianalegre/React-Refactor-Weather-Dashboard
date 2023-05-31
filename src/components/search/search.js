// Import
import React, { useState } from "react";
import "./search.css";


// Search Component
const Search = () => {

    // Create State from Search
    const [search, setSearch] = useState("");

    // Update State
    const handleUserInput = (event) => {
        setSearch(event.target.value)
        console.log("this is handleUserInput", search)
    };

    console.log('hi')


    return (
        <div className="searchBar">
            <input
                type="text"
                onChange={handleUserInput}
                placeholder="Enter a City Name"
                value={search}
            />
        </div>
    )

}


// Export Component
export default Search 