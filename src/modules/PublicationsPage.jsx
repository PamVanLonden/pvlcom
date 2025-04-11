import React from 'react';

const publications = [
    { 
        title: "Survey Sentiment Analyzer", 
        year: 2025, 
        img: "/assets/survey-analyzer.png", 
        link: "https://web.engr.oregonstate.edu/~vanlondp/analyzer/" 
    },
    { 
        title: "Cognitive Facets for Learning Technical Materials", 
        year: 2024, 
        img: "/assets/cognitive-facets-600.png", 
        link: "https://cognitive-styles.onrender.com/" 
    },
    { 
        title: "The Leaky Pipeline", 
        year: 2025, 
        img: "/assets/Leaky-Pipeline-w-Stats-2025.svg", 
        link: "https://pamvanlonden.com/leaky-pipeline/Leaky-Pipeline-w-Stats-2025.svg" 
    },
    { 
        title: "Cognitive Styles Personal Assessment", 
        year: 2021, 
        img: "/assets/cogstyles.pvl.png", 
        link: "" 
    },
    { 
        title: "Computer Applications and Implications Textbook", 
        year: "2017, 2020", 
        img: "/assets/computing.pvl.png", 
        link: "https://pamvanlonden.com/computing/" 
    },
    { 
        title: "Web Design, Management, and Interaction Textbook", 
        year: "2015, 2018", 
        img: "/assets/courses.pvl.png", 
        link: "" 
    },
    { 
        title: "Social and Ethical Issues in CS Textbook", 
        year: "2015, 2018, 2020", 
        img: "/assets/ethics.pvl.png", 
        link: "" 
    },
    { 
        title: "Gender & Technology Textbook", 
        year: "2004, 2010, 2017", 
        img: "/assets/gendertech.pvl.png", 
        link: "" 
    },
    { 
        title: "The Cultural Lens Interactive Lesson", 
        year: "2010, 2015", 
        img: "/assets/cultural-lens-thumb.png", 
        link: "https://pamvanlonden.com/cultural-lens/index.html" 
    },
    { 
        title: "The CSS Box Model Interactive Lesson", 
        year: 2015, 
        img: "/assets/css-box-model-thumb.png", 
        link: "https://pamvanlonden.com/webdev/box-model/index.html" 
    },
    { 
        title: "Color Theory Interactive Lesson", 
        year: 2017, 
        img: "/assets/color-theory-thumb.png", 
        link: "https://pamvanlonden.com/webdev/color-theory/" 
    },
    { 
        title: "Adventures of Grandma Crackers", 
        year: 2017, 
        img: "/assets/grandma-crackers-loralee-crow-thumb.jpg", 
        link: "https://pamvanlonden.com/grandma-crackers/" 
    },
    { 
        title: "Oregon Berry Family Tree", 
        year: "Interactive", 
        img: "/assets/oregon-berry-family-tree-popups-thumb.png", 
        link: "https://pamvanlonden.com/webdev/flow-chart/tree/berry-tree.html" 
    },
    { 
        title: "Entry Points to a Website Comparison", 
        year: 2016, 
        img: "/assets/entry-points-thumb.png", 
        link: "https://pamvanlonden.com/webdev/flow-chart/" 
    },
    { 
        title: "Eclipse over Mary’s Peak", 
        year: 2017, 
        img: "/assets/animation-eclipse-thumb.png", 
        link: "https://pamvanlonden.com/eclipse/" 
    }
];

function PublicationsPage() {
    return (
        <div id="pubs">
            <h2>Textbooks, Modules, and Interactive Lessons</h2>
            <div className="gallery">
                {publications.map((pub, index) => (
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
    );
}

export default PublicationsPage;
