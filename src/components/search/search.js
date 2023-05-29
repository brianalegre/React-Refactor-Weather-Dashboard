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
            <input type="text"
                placeholder="Enter a City Name"
                value={search}
                onChange={handleUserInput}
            />
        </div>
    )

}


// Export Component
export default Search 