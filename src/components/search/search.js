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
        // <div className="searchBar">
        //     <input
        //         type="text"
        //         onChange={handleUserInput}
        //         placeholder="Enter a City Name"
        //         value={search}
        //     />
        // </div>
        <div className="flex items-center">
            <div className="flex border border-purple-200 rounded">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-purple-600 border-l rounded ">
                    Search
                </button>
            </div>
        </div>
    )

}


// Export Component
export default Search 