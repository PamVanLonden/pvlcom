import React, { useState } from "react";
import useFetchCSV from "../hooks/useFetchCSV";
import { useCart } from "react-use-cart";

// Google Sheets URL to fetch painting data
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyMseqbTrrpUYEXzyDZ0pyh2O4rKBNAClSCt5sEGcjsw-ZxMf-Zx77z2Nf-XIoyib4mz-0Z1-XBEun/pub?output=csv";

const ImageGallery = ({ searchQuery }) => {
    const { data, loading, error } = useFetchCSV(GOOGLE_SHEET_URL);
    const { addItem } = useCart();
    const [notification, setNotification] = useState("");   
    const [isOpen, setIsOpen] = useState(false);            
    const [selectedItem, setSelectedItem] = useState(null); 

    if (loading) return <p className="loading">Loading... Scroll to see more available paintings...</p>;
    if (error)   return <p className="loading">Error: {error}</p>;

    // Filter paintings based on the search query
    const filteredPaintings = data.filter(item => {
        if (!searchQuery) return true; // If no search query, show all paintings
        const title = item.Title ? item.Title.toLowerCase() : "";
        const description = item.Description ? item.Description.toLowerCase() : "";
        return title.includes(searchQuery.toLowerCase()) || description.includes(searchQuery.toLowerCase());
    });

    const handleAddToCart = (item, imageSrc) => {
        addItem({
            id: item.id || Math.random(), 
            name: item.Title || "Untitled",
            price: parseFloat(item.Price || 0),
            quantity: 1,
            imageSrc, 
        });

        setNotification(`${item.Title || "Item"} added to cart!`);

        setTimeout(() => setNotification(""), 3000);
    };

    const handleImageClick = (item) => {
        setSelectedItem(item);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setSelectedItem(null);
    };

    return (
        <div className="gallery">
            {notification && <div className="cart-notification">{notification}</div>}

            {filteredPaintings.length > 0 ? (
                filteredPaintings.map((item, index) => {
                    if (!item.Filename) return null;

                    let cleanFileName = item.Filename.trim().toLowerCase();
                    if (!cleanFileName.endsWith(".webp")) cleanFileName += ".webp";

                    const imageSrc = `/assets/${cleanFileName}`;
                    
                    return (
                        <figure key={index} className="image-item">
                            <img 
                                src={imageSrc} 
                                alt={item.Description.trim() || "A description is missing."}
                                onError={(e) => e.target.src = '/assets/fallback.webp'} 
                                onClick={() => handleImageClick(item)} 
                                className="cursor-pointer"
                            />
                            
                            <figcaption>
                                <strong>{item.Title || "Untitled"}</strong> 
                                <br />{item.Description.trim() || "No description available."}
                                <br />Price: ${item.Price || "NFS"}
                                <br />
                            </figcaption>
                        </figure>
                    );
                })
            ) : (
                <p>No paintings found matching "{searchQuery}".</p>
            )}

            {isOpen && selectedItem && (
                <div className="modal-overlay" onClick={closeModal}>
                    {notification && <div className="cart-notification">{notification}</div>}

                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedItem.Title || "Untitled"}</h2>
                        <img 
                            src={`/assets/${selectedItem.Filename.trim().toLowerCase()}`} 
                            alt={selectedItem.Description || "Description missing"} 
                            className="modal-image"
                        />
                        <p>{selectedItem.Description || "No description available."}</p>
                        <p>Price: ${selectedItem.Price || "0.00"}</p>
                        <div className="button-section">
                            <button className="close-modal-btn" onClick={closeModal}>Close</button>
                            <button className="add-to-cart-btn" onClick={() => handleAddToCart(selectedItem, `/assets/${selectedItem.Filename.trim().toLowerCase()}`)}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;
