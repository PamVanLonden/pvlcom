import React, { useState } from "react";
import useFetchCSV from "../hooks/useFetchCSV";
import { useCart } from "react-use-cart";

// Google Sheets URL to fetch painting data
const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyMseqbTrrpUYEXzyDZ0pyh2O4rKBNAClSCt5sEGcjsw-ZxMf-Zx77z2Nf-XIoyib4mz-0Z1-XBEun/pub?output=csv";

const ImageGallery = () => {
    const { data, loading, error } = useFetchCSV(GOOGLE_SHEET_URL);
    const { addItem, totalItems } = useCart();
    const [notification, setNotification] = useState("");   // Notification state
    const [isOpen, setIsOpen] = useState(false);            // Modal
    const [selectedItem, setSelectedItem] = useState(null); // To track selected image
   
    if (loading) return <p className="loading">Loading... Scroll to see more available paintings... </p>;
    if (error)   return <p className="loading">Error: {error}</p>;

    const handleAddToCart = (item, imageSrc) => {
        
        addItem({
            id: item.id || Math.random(), // Ensure unique ID
            name: item.Title || "Untitled",
            price: parseFloat(item.Price || 0),
            quantity: 1,
            imageSrc, 
        });

        // Show notification
        setNotification(`${item.Title || "Item"} added to cart!`);

        // Hide notification after 3 seconds
        setTimeout(() => setNotification(""), 3000);
    };

    const handleImageClick = (item) => {
        setSelectedItem(item); // Set the selected item when image is clicked
        setIsOpen(true); // Open the modal
    };

    const closeModal = () => {
        setIsOpen(false); // Close the modal
        setSelectedItem(null); // Reset the selected item
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
                            // Open modal on click
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
            })}

            {/* Modal */}
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
