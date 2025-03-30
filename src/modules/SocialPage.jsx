import React from 'react';

const social = [
    { 
        title: "See my work in space M on Highland Drive. Click for Map.", 
        year: 2025, 
        img: "/assets/nost-art-2025.jpg", 
        link: "https://www.nost-art.com/map" 
    },
    { 
        title: "Watercolor Sale $10", 
        year: 2025, 
        img: "/assets/watercolor-sale-ad.jpb", 
        link: "https://pamvanlonden.vercel.app/?search=watercolor" 
    },
    { 
        title: "Etsy Shop", 
        year: 2025, 
        img: "/assets/etsy-page.jpg", 
        link: "https://www.etsy.com/shop/pamvanlonden" 
    },
    { 
        title: "View my near-daily painting posts on Instragram.", 
        year: 2025, 
        img: "/assets/instagram-page-c.jpg", 
        link: "https://www.instagram.com/pamvanlonden/" 
    },
]

function SocialPage(){
    return (
        <div id="pubs">
            <h2>Social Events and Media</h2>
            <div className="gallery">
                {social.map((pub, index) => (
                    pub.link ? (
                        <a href={pub.link} key={index} className="card-link" target="_blank" rel="noopener noreferrer">
                            <figure >
                                <img src={pub.img} alt={pub.title} />
                                <figcaption >
                                     {pub.title} ({pub.year}) 
                                </figcaption>
                            </figure>
                        </a>
                    ) : (
                        <div key={index} className=" non-clickable">
                            <figure >
                                <img src={pub.img} alt={pub.title} />
                                <figcaption >
                                     {pub.title} ({pub.year}) 
                                </figcaption>
                            </figure>
                        </div>
                    )
                ))}
            </div>

        </div>
    )
}
    
export default SocialPage;