import React, { useState } from 'react';

import {FaFacebook, FaLinkedin, FaCopy, FaInstagramSquare } from "react-icons/fa"; 
import { RiBlueskyFill } from "react-icons/ri";
import { BsThreadsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoShareSocialSharp } from "react-icons/io5";

const SocialShare = ({ url, title = '', text = '' }) => {
  const share = (platform) => {
    const encodedURL = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedText = encodeURIComponent(text);
    let appUrl, webUrl;

    switch (platform) {
      case 'bluesky':
        webUrl = `https://bsky.app/intent/compose?text=${encodedText}%20${encodedURL}`;
        break;
      case 'facebook':
        appUrl = `fb://facewebmodal/f?href=https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
        webUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`;
        break;
      case 'threads':
        appUrl = `instagram://threads?text=${encodedText}%20${encodedURL}`;
        webUrl = `https://www.threads.net/intent/post?text=${encodedText}%20${encodedURL}`;
        break;
      case 'linkedin':
        webUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        });
        return;
      default:
        break;
    }

    if (webUrl) {
      if (appUrl) {
        window.location.href = appUrl;
    
        setTimeout(() => {
          window.location.href = webUrl;
        }, 500);
      } else {
        window.location.href = webUrl;
      }
    }
  
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleMenu}><IoShareSocialSharp /></button>
      {isOpen && (
        // <nav>
        //   <a onClick={() => share('bluesky')} role="button" target="_blank" ><RiBlueskyFill /></a> 
        //   <a href="https://instagram.com/pamvanlonden" target="_blank" rel="noreferrer"  role="button"><FaInstagramSquare /></a>
        //   <a onClick={() => share('facebook')} target="_blank" rel="noreferrer"  role="button"><FaFacebook /></a>
        //   <a onClick={() => share('threads')} target="_blank" rel="noreferrer"  role="button"><BsThreadsFill /></a>
        //   <a onClick={() => share('linkedin')} target="_blank" rel="noreferrer"  role="button"><FaLinkedin /></a>
        //   <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}%0A${encodeURIComponent(url)}`} 
        //       rel="noreferrer"
        //       role="button"
        //       aria-label="Share via Email"
        //     > <MdEmail /> </a>
        //   <a onClick={() => share('copy')} ><FaCopy /></a>
        // </nav>

        <nav>
          <a href="#" onClick={(e) => { e.preventDefault(); share('bluesky'); }} aria-label="Share on Bluesky" role="button" target="_blank"><RiBlueskyFill /></a>
          <a href="https://instagram.com/pamvanlonden" rel="noreferrer"  role="button" target="_blank"><FaInstagramSquare /></a>
          <a href="#" onClick={(e) => { e.preventDefault(); share('facebook'); }} aria-label="Share on Facebook" role="button" target="_blank"><FaFacebook /></a>
          <a href="#" onClick={(e) => { e.preventDefault(); share('threads'); }} aria-label="Share on Threads" role="button" target="_blank"><BsThreadsFill /></a>
          <a href="#" onClick={(e) => { e.preventDefault(); share('linkedin'); }} aria-label="Share on LinkedIn" role="button" target="_blank"><FaLinkedin /></a>
          <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}%0A${encodeURIComponent(url)}`} 
            rel="noreferrer" aria-label="Share via Email" target="_blank"><MdEmail /></a>
          <a href="#" onClick={(e) => { e.preventDefault(); share('copy'); }} aria-label="Copy Link" role="button"><FaCopy /></a>
        </nav>


     )}
    </div>
  );
};

export default SocialShare;
