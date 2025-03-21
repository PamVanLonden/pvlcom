import React, { useState } from 'react';
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import ImageGallery from './ImageGallery.jsx';

function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <h2 className="homeOnly"><i><AiFillHome /></i>Welcome to my Gallery</h2>
            
            {/* Search Bar */}
            <p aria-live="polite">
                    <label htmlFor="search">
                    <i aria-hidden="true" className="search">
                        <AiOutlineSearch />
                    </i>
                </label>
                <input 
                    id="search"
                    type="text" 
                    placeholder="Search paintings by title, size, or description..." 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search paintings by title, size, or description"
                    role="searchbox"
                />
            </p>
            <ImageGallery searchQuery={searchQuery} />
        </>
    );
}

export default HomePage;
