import React from "react";
import useFetchCSV from "../hooks/useFetchCSV";



const GOOGLE_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vTyMseqbTrrpUYEXzyDZ0pyh2O4rKBNAClSCt5sEGcjsw-ZxMf-Zx77z2Nf-XIoyib4mz-0Z1-XBEun/pub?output=csv";

const ImageGallery = () => {
    const { data, loading, error } = useFetchCSV(GOOGLE_SHEET_URL);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="gallery">
            {data.map((item, index) => {
                if (!item.Filename) return null;

                // Clean up filename
                let cleanFileName = item.Filename.trim().toLowerCase();
                if (!cleanFileName.endsWith(".webp")) cleanFileName += ".webp";

                // Directly reference public folder (Vite serves `/public` as root)
                const imageSrc = `/assets/${cleanFileName}`;

                return (
                    <figure key={index} className="image-item">
                       <img 
                            src={imageSrc} 
                            alt={item.Description || "A description is missing."} 
                            onError={(e) => e.target.src = '/assets/fallback.webp'} 
                        />
                        
                        <figcaption>
                            <strong>{item.Title}</strong> 
                            <br />{item.Description}
                            <span><button>Add to Cart</button> </span>
                        </figcaption>
                    </figure>
                );
            })}
        </div>
    );
};

export default ImageGallery;
