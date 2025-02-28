import React from 'react';
import { AiFillHome } from "react-icons/ai";
import ImageGallery from './ImageGallery.jsx'

function HomePage(){
    return (
        <>
            <h2 className="homeOnly"><i><AiFillHome /></i>Welcome to my Gallery</h2>
            
            <ImageGallery />
        </>
    )
}
    
export default HomePage;