import React from 'react';
import { AiFillHome } from "react-icons/ai";
import ImageGallery from './ImageGallery.jsx'

function HomePage(){
    return (
        <>
            <h2><i><AiFillHome /></i>Welcome to my Gallery</h2>
            <article>
                <p>Scroll to see more available paintings...</p>
            
                <ImageGallery />
            </article>
        </>
    )
}
    
export default HomePage;