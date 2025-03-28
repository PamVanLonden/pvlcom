import React from 'react';

const ads = [
    { 
        title: "The Arts Center Artshop, Corvallis", 
        img: "/assets/tac-wordmark.png", 
        link: "https://theartscenter.net/" 
    }
];
    
function ExhibitsPage() {
    return (
        <>
        <h2>Exhibits</h2>
        <p>Solo and Group displays of my paintings:</p>
            <a href={ads.link} target="_blank">
                <img src={ads.img} alt={ads.title} className="float" />
            </a>    
     <article id="exhibits">
       <dl className="columns2">
         <dt>2025 The Arts Center, Corvallis ArtShop</dt>
         <dd>Ten small pieces in oil on canvas.</dd>
        <dt><a href="https://www.discoverourcoast.com/coast-weekend/arts/cannon-beach-gallery-gets-lost-in-blue/article_de26b9d0-df68-11ef-b3dc-53f64321a748.html" target="_blank">2025 Lost in Blue</a>, Cannon Beach Gallery, Cannon Beach, Oregon;</dt>
        <dd>Two pieces accepted; one sold.</dd>
        <dt>2024 Show &amp; Sell, The Arts Center, Corvallis, Oregon</dt>
        <dd>40+ pieces for sale at this holiday fair</dd>
        <dt>2023-2024 Northside Open Studio Tour, Corvallis, Oregon</dt>
        <dd>13 watercolor pieces, and 5 oil pieces sold during this neighborhood sale at 17 locations.</dd>
        <dt>2016 Studio262 Gallery, Corvallis, Oregon.</dt>
        <dd>10 pieces consigned.</dd>
        <dt>2015 Oregon State University LaSells Stewart Center Staff Exhibit.</dt>
        <dd>2 pieces accepted through jury.</dd>
        <dt>2015 <a href="https://www.blurb.com/b/6137599-the-new-plein-air-revised-ed" target="_blank">The New Plein Air</a> (Revised Ed.), 50 pages, $21.99</dt>
        <dd>Invited by the artist/publisher Phil Dynan, 2015</dd><dt>2015 Solo Invitational Exhibit Red Bluff Gallery</dt>
        <dd>15 pieces, Red Bluff, California</dd>
        <dt>2015 Around Oregon Annual, Corvallis Arts Center</dt>
        <dd>Juried by Johanna Seasonwein, Senior Curator Western Art Jordan Schnitzer Museum</dd>
        <dt>2014 Samuel Robert Winery Gallery</dt>
        <dd>Solo exhibit of 21 pieces.</dd><dt>2013 Lake Oswego Invitational &#8216;Spoon&#8217; Exhibit</dt>
        <dd>8 pieces accepted and 2 pieces sold!</dd>
        <dt>2013 Stash Yarn Shop</dt><dd>Solo show of 30+ oil and acrylic landscape paintings.</dd>
        <dt>2012 Albany Public Library</dt><dt>2013 Footwise Window</dt>
        <dd>Solo show of 50 oil and acrylic landscape paintings.</dd>
        <dt>2012 Albany Public Library</dt>
        <dd>Juried solo exhibition</dd>
        <dt>2012 Oregon Waterways: The Rich Abundance From Streams to Oceans</dt>
        <dd>Juried exhibition at LaSells Stewart Center, Oregon State University</dd>
        <dt>2012. Kimberly Conrad, Fine Artist</dt><dd>Daily Painter blog</dd>
        <dt>2010-2014 Corvallis Fall Festival</dt>
        <dd>Juried outdoor artisan fair</dd>
        <dt>2012 Corvallis Arts Center Showcase</dt>
        <dd>Juried, Oregon artists exhibit.</dd>
        <dt>2012 Stash Yarn Shop</dt>
        <dd>Many 8&#215;8-inch framed daily paintings and larger works.</dd>
        <dt>2012 Sam&#8217;s Station</dt>
        <dd>Thirty-one 8&#215;8-inch framed daily paintings</dd>
        <dt>2012 Good Samaritan Hospital</dt><dd>15 large paintings</dd>
        <dt>2011 Daily Paintworks</dt>
        <dd>Weekly painting challenges, sold two paintings for the Japan Relief fund.</dd>
        <dt>2011 Corvallis Etsy Group Exhibits</dt>
        <dd>Group show in the Footwise storefront window and Bookbin window.</dd>
        <dt>2011 The She Project</dt>
        <dd>A women&#8217;s creative community project.</dd>
        <dt>2010-2015 The Mod Pod</dt>
        <dd>Ongoing exhibition and sales of daily paintings, framed and unframed. Thirty-four paintings sold in 18 months.</dd>
        <dt>2011 Corvallis Arts Center Community Open</dt>
        <dd>Annual submission.</dd><dt>2010 Albany Heartspring Wellness Center</dt>
        <dd>Nineteen pieces purchased, 1 commissioned, and other works on canvas and Claybord.</dd>
        <dt>2010-11 NW Healing Center</dt>
        <dd>Forty-four works in acrylic, oil, and watercolor</dd>
        <dt>2010-11 Contemporary Fine Art International</dt>
        <dd>Juried online exhibit.</dd>
        <dt>2010-2011 Oregon Daily Painters</dt>
        <dd>Online gallery.</dd>
        <dt>2010 Dana Marie Gallery</dt>
        <dd>Display of larger works in oil and acrylic, including American Landscapes and the Food on the Table Series.</dd>
        <dt>2010 The 9 show – A Canine and Feline Exhibit.</dt>
        <dd>LaSells Stewart Center. Juried.</dd>
        <dt>2010 LaSells Stewart Center Community Open</dt>
        <dd>Annual submission.</dd>
        <dt>2010 Heart of the Valley Fundraiser</dt>
        <dd>Three daily paintings raffled.</dd>
        <dt>2010 The Soup Shop</dt>
        <dd>3-month exhibit of daily paintings and other gallery-edged canvas works.</dd>
        <dt>2010 Annual Community Open, Corvallis Arts Center</dt>
        <dd>Annual submission</dd><dt>2010-11 Etsy Treasuries</dt>
        <dd>Juried into 90+ collections by peer artisans.</dd>
        <dt>2009-2011 Daily Abstract International Painters</dt>
        <dd>Juried online exhibit.</dd>
        <dt><a href="https://gazettetimes.com/entertainment/artist-spotlight-pam-van-londen/article_d2208d90-a942-11de-9d04-001cc4c002e0.html" target="_blank">Gazette Times Featured Artist</a></dt>
           <dd>2009</dd>
        <dt>2009 Sam&#8217;s Station</dt>
        <dd>Large works.</dd>
        <dt>2009 La Sells Stewart Center Guistina Gallery, OSU</dt>
        <dd>Community Open.</dd><dt>2009 Benton Hospice</dt>
        <dd>Food on the Table series.</dd>
        <dt>2009 Red Horse Cafe and Darrell&#8217;s Restaurant</dt>
        <dd>Small and large works.</dd><dt>2009 Fidelity National Title</dt>
        <dd>Large landscapes</dd><dt>2009 Leading Floral</dt>
        <dd>Various small works, including Food on the Table Series</dd>
        <dt>2009 Bombs Away Cafe</dt><dd>Food on the Table Series</dd>
        <dt>2009 Our Fish Story, La Sells Stewart Center Guistina Gallery, OSU</dt>
        <dd>6-panel polyptych juried in</dd>
        <dt>2008 La Sells Stewart Center Guistina Gallery, OSU</dt>
        <dd>By invitation, with Mike Rangner and Mark Allison.</dd>
        <dt>2008 Bomb&#8217;s Away Cafe</dt><dd>Oil and acrylic landscapes.</dd>
        <dt>2008 Unitarian-Universalist Fellowship of Corvallis</dt>
        <dd>&#8220;Our Beautiful Country&#8221; 38 oil and acrylic landscapes and portraits. One painting sold.</dd>
        <dt>2008 Corvallis Fall Festival</dt>
        <dd>Sold 2 daily paintings and many card reproduction</dd>
        <dt>2008 La Sells Stewart Center Guistina Gallery Open Community Exhibit, OSU</dt>
        <dd>4-part polyptich submitted.</dd>
        <dt>2008 Maldanodo&#8217;s in Portland&#8217;s Sellwood neighborhood.</dt>
        <dd>50+ daily paintings, acrylic and oil canvas. One painting sold.</dd>
        <dt>2008 Corvallis Chamber Coalition, Fidelity, and other spots around Corvallis.</dt>
        <dd>Various landscapes and portraits.</dd>
        <dt>2008 OSU Women&#8217;s Center</dt>
        <dd>35 paintings on the gallery wall. Two paintings sold.</dd>
        <dt>2007 Unitarian-Universalist Fellowship of Corvallis Holiday Bizarre</dt>
        <dd>Five paintings sold.</dd>
        <dt>2007 – 2008 Henderson&#8217;s Copies</dt>
        <dd>12 pieces hanging on the gallery wall.</dd>
        <dt>2007 Leading Floral</dt>
        <dd>11 pieces hanging in this enchanting florist&#8217;s shop.</dd>
        <dt>2007 Corvallis Fall Festival</dt>
        <dd>6 pieces in the Corvallis Art Guild booth.</dd>
        <dt>2007 Nypro</dt>
        <dd>14 pieces</dd>
        <dt>2007 Benton Hospice</dt>
        <dd>10 pieces</dd>
        <dt>2007 Clothesline Sale of Art, Corvallis, Oregon</dt>
        <dd>1 piece sold</dd>
        <dt>2007 La Sells Stewart Center Austin Auditorium Open Community Exhibit, OSU</dt>
        <dd>1 piece submitted.</dd>
        <dt>2007 Corvallis Book Bin window</dt>
        <dd>Harvest Musician Under the Bridge art for Harvest Music Festival Poster, along with an abstract landscape.</dd>
        <dt>2007 Willamette Community Credit Union, Corvallis, Oregon.</dt>
        <dd>15 landscapes from around the USA.</dd>
        <dt>2007, 2006, 2005 Harvest Music Festival</dt>
        <dd>Round paintings of Greengable Gardens and Cauthorn property painted for the poster, invitation, and web site.</dd>
        <dt>2006 Benton County Fair, Oregon.</dt>
        <dd>Two 2nd-place ribbons for <a title="Portrait of My Children is not for sale." href="">Portrait of My Children</a> and <a title="Pismo Beach Garden is for sale at Boundless Gallery." href="https://pamvanlonden.com/pismo-beach-garden/">Pismo Beach Garden</a>.</dd>
        <dt>2006  Corvallis Montessori School Gallery</dt>
        <dd>12 landscapes, seascapes, and cityscapes, acrylic on canvas</dd>
        <dt>2005 Harvest Music Festival</dt>
        <dd>Single work auctioned.</dd>
        <dt>2004 da Vinci Days</dt>
        <dd>Single work juried for display at La Sells Stewart Center.</dd>
        <dt>2000 or so Corvallis Arts Center Community Holiday Exhibit.</dt>
        <dd>Single work submitted.</dd>
        <dt>1996 Unitarian-Universalist Fellowship of Corvallis</dt>
        <dd>Watercolors, photos, and drawings of Provence and Oregon.</dd>
        <dt>1996 The Krees Building downtown Corvallis</dt>
        <dd>Watercolors, photos, and drawings of Provence and Oregon, joint show with Liz Kingslien.</dd>
        <dt>1997 The Valley Restaurant</dt>
        <dd>Watercolors, photos, and drawings of Provence and Oregon.</dd>
        <dt>1997 Rogue Wave Software</dt>
        <dd>Watercolors, photos, and drawings of Provence and Oregon; joint show with other Corvallis Art Guild members.</dd>
        <dt>1996 1997 Hanging About Town</dt>
        <dd>Watercolors, photos, and drawings of Provence and Oregon.</dd>
        <dt>1983 Juried Student Show, Western Oregon State College</dt>
        <dd>Dyptich interior acrylic on canvas.</dd>
        <dt>1983 Scribbles, solo show, Student Union gallery, Western Oregon State College.</dt>
        <dd>Mixed media non-representation on paper under glass.</dd>
        <dt>1982 Juried Student Show, Western Oregon State College</dt>
        <dd>Set of two black and white photo prints on matte paper framed under glass.</dd>
        <dt>1980 Freshman solo show, Theatre lobby, Western Oregon State College.</dt>
        <dd>Watercolors.</dd>
    </dl>
    </article>
        </>
    );
}

export default ExhibitsPage;
