import React from "react";

function CommissionsPage() {
    const images = [
        { src: "/public/assets/pvl-columbia-gorge-crown-point-beacon-rock-2021-1240.jpg", caption: "Columbia River Crown Point Beacon Rock 3 2021" },
        { src: "/public/assets/pvl-marys-peak-11-dyptich-400.jpg", caption: "Commission of Mary’s Peak" },
        { src: "/public/assets/pvl-nest-of-prosperity10.jpg", caption: "Nests of Prosperity 9 and 10" },
        { src: "/public/assets/pvl-willamette-river-28-clem.jpg", caption: "Willamette River commission" },
        { src: "/public/assets/chefs-jubilie-2011-poster1.jpg", caption: "Radishes painting supports the Grace Center" },
        { src: "/public/assets/levien-13.2.jpg", caption: "Deeper into the Jungle" },
        { src: "/public/assets/pvl-heidrich-girls-surfing.jpg", caption: "Heidrich Girls Surfing" },
        { src: "/public/assets/pvl-columbia-gorge-beacon-rock.jpg", caption: "Columbia River from Rooster Rock of Beacon Rock 2" },
        { src: "/public/assets/pvl-cgbrrr-40x30.jpg", caption: "Columbia River from Rooster Rock of Beacon Rock 1" },
        { src: "/public/assets/pvl-randy-heidrich-surfing.jpg", caption: "Thank you for the surf lesson" },
        { src: "/public/assets/pvl-johnson-creek-7.jpg", caption: "Johnson Creek 7 by request" },
        { src: "/public/assets/pvl-miller-family.jpg", caption: "Family portrait in Waldport" },
        { src: "/public/assets/pvl-crows-at-the-beach2.jpg", caption: "Crows at the Beach 2" },
        { src: "/public/assets/pvl-byebyebirdie.jpg", caption: "Bye Bye Birdie" },
        { src: "/public/assets/pvl-poppiessunflowers2.jpg", caption: "Sunflowers and Poppies Commission" },
        { src: "/public/assets/uufc-day7.1.jpg", caption: "Unitarian-Universalist Religious Exploration Mural completed" },
        { src: "/public/assets/tryon_5.1.jpg", caption: "Along the Path at Tryon Park" },
    ];

    return (
        < >
            <h2>Commissions</h2>
            <p>If you'd like a special face, place, or idea illustrated in paint, electronic art, or fiber, please contact me by phone or email to discuss the project.</p>

            <div className="gallery">
                {images.map((item, index) => (
                    <figure key={index}>
                        <img src={item.src} alt={item.caption} />
                        <figcaption>{item.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </>
    );
}

export default CommissionsPage;
