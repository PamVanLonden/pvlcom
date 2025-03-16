import React, { useState } from 'react';
import { AiFillHome } from "react-icons/ai";
import ImageGallery from './ImageGallery.jsx';

function HomePage() {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
            <h2 className="homeOnly"><i><AiFillHome /></i>Welcome to my Gallery</h2>
            
            {/* Search Bar */}
            <input 
                type="text" 
                placeholder="Search paintings by title or description..." 
                value={searchQuery} 
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ marginBottom: '10px', padding: '5px', width: '100%' }}
            />

            <ImageGallery searchQuery={searchQuery} />
        </>
    );
}

export default HomePage;
