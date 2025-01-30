import React from 'react';
import { AiFillHome } from "react-icons/ai";
import GoogleSheetData from './GoogleSheetData';

function HomePage(){
    return (
        <>
            <h2><i><AiFillHome /></i>Welcome to my Gallery</h2>
            <article>
                <h3>Available Paintings</h3>
                <p>Scroll to see more.</p>
            <GoogleSheetData />
            </article>
        </>
    )
}
    
export default HomePage;