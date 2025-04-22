import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import ImageGallery from './ImageGallery.jsx';

function HomePage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialQuery = searchParams.get("search") || "";
    const [searchQuery, setSearchQuery] = useState(initialQuery);

    useEffect(() => {
        if (initialQuery) {
            setSearchQuery(initialQuery);
        }
    }, [initialQuery]);

    useEffect(() => {
        if (searchQuery) {
            setSearchParams({ search: searchQuery });
        } else {
            setSearchParams({});
        }
    }, [searchQuery, setSearchParams]);


    return (
        <>
            {/* Search Bar */}
            <p aria-live="polite"  className="float fifty">
                    <label htmlFor="search">
                    {/* <i aria-hidden="true" className="search">
                        <AiOutlineSearch />
                    </i> */}
                </label>
                <input 
                    id="search"
                    type="text" 
                    placeholder="Search 🔎 scroll &darr;" 
                    value={searchQuery} 
                    onChange={(e) => setSearchQuery(e.target.value)}
                    aria-label="Search title, size, media..."
                    role="searchbox"
                />
                
            </p>
            <h2 className="homeOnly"><i><AiFillHome /></i>Welcome to my Gallery</h2>
            <p>Original abstract landscape oil, acrylic, and watercolor paintings, 
                by fine artist and educator, Pam Van Londen, Corvallis, Oregon. 
                Purchase paintings without fees using Venmo or Zelle.</p>
            
            <ImageGallery searchQuery={searchQuery} />
        </>
    );
}

export default HomePage;
