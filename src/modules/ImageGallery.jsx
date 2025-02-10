import React, { useState } from "react";
import useFetchCSV from "../hooks/useFetchCSV";
import { useCart } from "react-use-cart";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import { Link } from "react-router-dom"; // Import Link for navigation

// Google Sheets URL to fetch painting data
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyMseqbTrrpUYEXzyDZ0pyh2O4rKBNAClSCt5sEGcjsw-ZxMf-Zx77z2Nf-XIoyib4mz-0Z1-XBEun/pub?output=csv";

const ImageGallery = () => {
    const { data, loading, error } = useFetchCSV(GOOGLE_SHEET_URL);
    const { addItem, totalItems } = useCart();
    const [notification, setNotification] = useState(""); // Notification state

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleAddToCart = (item) => {
        addItem({
            id: item.id || Math.random(), // Ensure unique ID
            name: item.Title || "Untitled",
            price: parseFloat(item.Price || 0),
            quantity: 1,
        });

        // Show notification
        setNotification(`${item.Title || "Item"} added to cart!`);

        // Hide notification after 3 seconds
        setTimeout(() => setNotification(""), 3000);
    };

    return (
        <div className="gallery">
            {/* Notification Message */}
            {notification && <div className="cart-notification">{notification}</div>}

            {data.map((item, index) => {
                if (!item.Filename) return null; // Skip items without a valid filename

                let cleanFileName = item.Filename.trim().toLowerCase();
                if (!cleanFileName.endsWith(".webp")) cleanFileName += ".webp";

                // Directly reference public folder (Vite serves `/public` as root)
                const imageSrc = `/assets/${cleanFileName}`;

                return (
                    <figure key={index} className="image-item">
                        <img 
                            src={imageSrc} 
                            alt={item.Description.trim() || "A description is missing."}
                            onError={(e) => e.target.src = '/assets/fallback.webp'} 
                        />
                        
                        <figcaption>
                            <strong>{item.Title || "Untitled"}</strong> 
                            <br />{item.Description.trim() || "No description available."}
                            <br />Price: ${item.Price || "0.00"}
                            <br />
                            {/* Buttons Section */}
                            <div className="button-section">
                                {/* Add to Cart Button */}
                                <button className="add-to-cart-btn" onClick={() => handleAddToCart(item)}>Add to Cart</button>

                                {/* View Cart Button with Icon */}
                                <Link to="/cart" className="view-cart-btn">
                                    <FaShoppingCart className="cart-icon" /> View Cart ({totalItems})
                                </Link>
                            </div>
                        </figcaption>
                    </figure>
                );
            })}
        </div>
    );
};

export default ImageGallery;
