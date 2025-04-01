import React from 'react';

function AboutPage(){
    const selfies = [
        { src: "/assets/pam-van-londen-selfie-2025.webp", alt: "Selfie of Pam Van Londen, 2025, in her art studio." } 
    ]
    
    return (
        <>
            <h2> About Me</h2>
           <article id="about">
           <figure key={index}>
                <img src={selfies.src} alt={selfies.alt} />
                <figcaption>{selfies.alt}</figcaption>
            </figure>
           <h3>Lately...</h3>
            <p>My latest works are a set of naturescapes in oil on Ampersand Claybord panels 
            and gallery-edged canvases.  My childhood camping trips and motorhome travels, 
            and frequent travels up and down Hwy 99 have landed me in spectacular scenery, 
            which I am compelled to paint! I experiment with underpainting, layering, dripping, 
            and random mark-making to add texture and depth. When working in oil on Claybord, 
            layers of thinned paint on the clay surface is reminiscent of working affresco.  
            </p>
               <p> I aspire to paint every day and have been an active member of the Daily Painter movement. 
            En plein air and studio landscapes are my most common subjects, 
            but I also paint flower, food, and people portraits. 
            The occasional non­-objective series of paintings helps expand my techniques. 
            My favorite subjects are riparian areas where water and trees meet, 
            the colorful farmlands of the Willamette Valley, and the glory of our local 
            Mary&apos;s Peak (tcha Timanwi). From my living room window, 
            I can see her ever-changing face through a curtain of sequoia trees. 
            Fall in the Willamette Valley can be spectacular if the rains hold off until Winter. 
            The season&apos;s colors continue to inspire my work throughout the year.
            </p>

            <h3>History...</h3>
            <p>I became an artist at age 12, after a visit to the Exploratorium in San Francisco. 
            I watched a woman paint perfect but random circles on a large sheet of paper. 
            She used a sumi brush and black India ink. “Oh! “I thought, “what a feat; 
            how can she be so perfect?” My sister-­in-­law must have overheard me say how
            enthralled I was; she bought me a sketchbook that week with the idea that I, too, 
            could make perfect circles with practice. I&apos;ve been filling sketchbooks and 
            canvases ever since.
            </p><p>
            I prefer to paint rather than draw, working in oils, acrylics, and watercolor. 
            I began to paint frequently during a sketching excursion in Provence with the 
            late Marie le Glatin Kies, a French artist and author. Her magical approach reminded 
            me that I need not force anything; just observe. I studied art and photography in high school,
            college, and graduate school. Art Education and Computer Science Education courses 
            comprised most of my graduate work for a Master&apos;s of 
            Interdisciplinary Studies Degree at Western Oregon University, completed in 1988. 
            I currently teach Computer Science courses at Oregon State University for the 
            College of Engineering.
            </p>
            </article>    
        </>
    )
}
    
export default AboutPage;
