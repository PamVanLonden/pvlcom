import React from 'react';
import {FaFacebook, FaLinkedin, FaCopy, FaInstagramSquare } from "react-icons/fa"; 
import { RiBlueskyFill } from "react-icons/ri";
import { BsThreadsFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

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

  return (
    <div>
        <a onClick={() => share('bluesky')} ><RiBlueskyFill /></a> 
        <a href="https://instagram.com/pamvanlonden" target="_blank" rel="noreferrer"><FaInstagramSquare /></a>
        <a onClick={() => share('facebook')} ><FaFacebook /></a>
        <a onClick={() => share('threads')} ><BsThreadsFill /></a>
        <a onClick={() => share('linkedin')} ><FaLinkedin /></a>
        <a href={`mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text)}%0A${encodeURIComponent(url)}`} 
            rel="noreferrer"
            aria-label="Share via Email"
          > <MdEmail /> </a>
        <a onClick={() => share('copy')} ><FaCopy /></a>
    </div>
  );
};

export default SocialShare;
