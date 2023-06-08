// Import
import React, { useState } from "react";
import "./search.css";


// Search Component
const Search = ({ onSearchChange }) => {

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
            <div className="flex space-x-1">
                <input
                    type="text"
                    className="block w-full px-4 py-2 text-purple-700 bg-white border rounded-full focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    placeholder="Search..."
                />
                <button className="px-4 text-white bg-purple-600 rounded-full ">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </button>
            </div>
        </div>
    )

}


// Export Component
export default Search 