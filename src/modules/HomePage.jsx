import React, { useState } from 'react';
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import ImageGallery from './ImageGallery.jsx';

function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            {/* Search Bar */}
            <p aria-live="polite"  className="float fifty">
                    <label htmlFor="search">
                    <i aria-hidden="true" className="search">
                        <AiOutlineSearch />
                    </i>
                </label>
                <input 
                    id="search"
                    type="text" 
                    placeholder="Search by title, size, or description" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search by title, size, or description"
                    role="searchbox"
                />
            </p>
            <h2 className="homeOnly"><i><AiFillHome /></i>Welcome to my Gallery</h2>
            <p>Original abstract landscape oil, acrylic, and watercolor paintings, 
                by fine artist and educator, Pam Van Londen, Corvallis, Oregon.</p>
            
            <ImageGallery searchQuery={searchQuery} />
        </>
    );
}

export default HomePage;
