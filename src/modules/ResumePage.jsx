import React from 'react';
import { MdOutlineWork } from "react-icons/md";
import { IoIosPrint } from "react-icons/io";
import { FaUserGraduate } from "react-icons/fa6";
import { RiUserCommunityFill } from "react-icons/ri";
import { FaAward, FaHammer } from "react-icons/fa";


function ResumePage(){
    return (
        <>
          <h2 itemProp="name" className="tshadow light"> Artist and University Instructor </h2>
    <article className="resume">

      {/* <aside className="alignright fiftyfive">
        <figure className="alignleft thirty ">
          <img itemProp="image" className="circle boxshadow" src="http://web.engr.oregonstate.edu/~vanlondp/images/pam-vanlonden-2021-600.jpg" alt="Pam Van Londen, 2021" title="&copy; Van Londen 2021" />
          <figcaption className=" "> Pam Van Londen </figcaption>
        </figure>
        <p itemProp="description">
          Every day, I organize words, code, and media to inspire learners to fulfill their dreams. 
          <span className="break" style="margin-bottom:3%;">I also capture my own dreams in oil, acrylic, and watercolor paint.</span>
        </p>
      </aside> */}
 
      <address  id="contact-details">  
          <p>Oregon State University<br />  
            <span itemProp="address">1148 Kelly Engineering Center</span>, 
            <span itemProp="addressLocality">Corvallis</span>, OR 97331 </p>
            <p>
              {/* <a itemProp="telephone">(541) 760-1449</a> (cellphone)  */}
              </p>
            <p><a itemProp="url" rel="me" href="http://web.engr.oregonstate.edu/~vanlondp/">Vitae</a>
            </p> 
        <p><i onClick={() => window.print()}  title="Opens the print dialog box."  style={{ cursor: "pointer" }} ><IoIosPrint /></i></p>  
              
      </address>
    
      <p className="clear"></p>
    </article>



   <article id="work"   className="resume">
      <h2><i><MdOutlineWork /></i> Work Experience</h2>
      <dl>
        <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job">
          <a href="https://eecs.oregonstate.edu/" target="_blank">
          University Instructor</a></dt>
        <dd itemProp="description">Design and deliver instruction to Computer Science, Business, Design, New Media, Psychology, Education, and Women Studies students at 
          <span itemProp="worksFor"   itemScope   itemType="http://schema.org/Organization" >Oregon State University</span> in <span itemProp="addressLocality"   itemScope   itemType="http://schema.org/Place" >Corvallis, Oregon</span>.
          <span  itemProp="startDate" content="2004-01-01T20:00">2004</span> to <span itemProp="endDate" content="2017-12-31T20:00">present.</span></dd>
            <dd className="sub"><a href="https://ethics.pamvanlonden.com/" target="_blank">Ethics in Computer Science</a> CS 391 (3 credits) 2008 t0 2021.</dd>
            <dd className="sub"><a href="https://pamvanlonden.com/webdev" target="_blank">Web Development</a> CS 290 (4 credits) 2021 to present.</dd>
            <dd className="sub"><a href="https://programming.pamvanlonden.com/" target="_blank">Programming for non-CS Majors</a> CS 201 (s credits) 2022.</dd>
            <dd className="sub"><a href="#" target="_blank">Introduction to Computer Science II</a> CS 162 (4 credits) 2024, 2025.</dd>
            <dd className="sub"><a href="http://computing.pamvanlonden.com/" target="_blank">Applications and Implications of Computers</a> CS 101 (4 credits) 2017 to present.</dd>
            <dd className="sub"><a href="#" target="_blank">Web Management</a> CS 295 (4 credits) 2004 to 2018. </dd>
            <dd className="sub"><a href="#" target="_blank">Web Design</a> CS 195 (4 credits) 2004 to 2020.</dd>
            <dd className="sub"><a href="https://gendertech.pamvanlonden.com/">Gender and Technology</a> WGSS 320 (3 credits;) 2005 to 2019.</dd>
            <dd className="sub"><a href="#">Gender and Technology</a> WGSS 525 (3 credits; graduate levels) 2005, 2009, 2013.</dd>
            <dd className="sub"><a href="#" target="_blank">Women Role Models Project</a> Activism Project: Video Interviews of Women Technology Innovators, in collaboration with OSU student interns.</dd>
            <dd className="sub"><a href="#">Computers in Graphic Design</a> fall term 1997, Oregon State University, Corvallis, Oregon. </dd>

        <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job">
          <a href="http://pamvanlonden.com" target="_blank">
          Textbook Author</a></dt>
             <dd>Write and maintain online textbooks for college courses in Web Design, Web Management, and Gender &amp; Technology. Textbooks integrate with Canvas course management system.</dd>
              <dd className="sub"><a href="https://ethics.pamvanlonden.com/">CS Ethics</a></dd>
              <dd className="sub"><a href="http://courses.pamvanlonden.com">Web Design, Management, and Interaction</a></dd>
             	<dd className="sub"><a href="https://computing.pamvanlonden.com/">Computer Applications</a></dd>
              <dd className="sub"><a href="https://gendertech.pamvanlonden.com/">Gender &amp; Technology</a></dd>

          <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job">
            <a href="http://ecampus.oregonstate.edu/" target="_blank">
            Project Manager:  Ecampus at Oregon State University</a></dt>
            <dd>Corvallis, Oregon, 2001 through 2004. Managed the development, design, and production of distance courses and internal business and marketing projects. Managed production team: Delegated course production work to 6-person team. Collaborated
              with numerous faculty, adjunct staff, and media production staff to envision, plan, design, and produce online courses. Developed websites: Managed development, design, writing, and production of a 300-page <a href="http://oregonstate.edu/instruct/coursedev/models/id/taxonomy/index.htm"
                target="_blank">Faculty Resources Course Development</a> website. Managed development of numerous course websites, and simple project tracking sites. Developed database-driven intranet: Collaborated in the development and prototyping of
              internal database and intranet website to communicate with department teams. Mentored staff: Provided guidance to department regarding efficient meeting documentation, graphic design methods, and accessibility guidelines.</dd>
 
            <dt className="job" itemProp="jobTitle"   itemScope   itemType="http://schema.org/Event/Job"> 
            <a href="http://pamvanlonden.com" target="_blank">
            Fine Artist</a></dt>
            <dd>Corvallis, Oregon. 1990 to present. Currently working in oil on Claybord, acrylic on canvas, and iridescent watercolor on paper. Taught art skills to students, teachers, and families. Returned from traveling to paint en plein air around the
              USA in 2006. <a href="http://pamvanlonden.etsy.com" target="_blank">Etsy</a> (2008 to present). 
              <a href="http://www.dailypaintworks.com/" target="_blank">Daily Paintworks</a> (2010 to 2018). <a href="http://fineartamerica.com/profiles/pam-van-londen.html" target="_blank">Fine Art America</a> (2010 to present) </dd>

            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job">
            <a href="http://pamvanlonden.com" target="_blank">
            Owner of Be Proactive!</a> </dt>
            <dd>Corvallis, Oregon, 1997 to 2017. Provide integrated marketing consulting, website development, and graphic design services to small- and medium-sized businesses around the nation. Teach design and web development workshops.</dd>
     </dl>


      <section className="reveal resume">
        <p className="">More... </p>
        <div className="more">
          <dl>
            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job">
            <a href="https://pamvanlonden.com/?s=workshops" target="_blank">Workshop Instructor</a></dt>
            <dd>Alla Prima Acrylic Painting on Canvas: 2016, Milwaukie, Oregon.</dd>
            <dd> Creating an Online Presence Workshop: 2008-09, Linn Benton Community College, Corvallis, Oregon.</dd>
            <dd> Desktop Publishing and Presentations: summer term 1997, Western Oregon University, Monmouth, Oregon.</dd>

            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job">
            <a href="https://www.translations.com/about/global-group/terra-pacific-technical-writing.html" target="_blank">Marketing Representative:  Terra Pacific Writing Corporation</a></dt>
            <dd>Corvallis, Oregon, 1994 to 1996. Managed marketing efforts for the 25-person private company during its most profitable time. Increased revenues: Wrote proposals to manage writing, graphic design, localization, and translation projects to
              clients worldwide. Coordinated events: Coordinated speaking engagements and trade show efforts. Managed lead follow-up. Designed collateral and documentation: Created award-winning brochure and manual cover designs for clients. Developed
              website: Managed initial planning and implementation. Published newsletter: Edited and published the award-winning newsletter, <q>Terra Communiqu&eacute;.</q> Bought advertising: Bought, designed, and placed advertising in local, national,
              and international print media. Created tracking systems: Designed Project Management database to track proposals and sales; and Contact Information Management database to track 4,500 clients, prospects, and media. </dd>

            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a href="https://www.linkedin.com/company/csnw" target="_blank">Marketing Coordinator: Computer Stores Northwest, Inc. </a></dt>
            <dd> Corvallis, Oregon, 1989 to 1994. Managed marketing efforts for the seven-store chain during its most profitable time. Implemented education conferences: Coordinated Teaching with Technology and Technology Leadership Conference. Managed 40
              staff members, vendors, and presenters. Designed marketing materials. Created tracking systems: Designed Project Management database to track marketing project time, budget, cost, and advertising co-op funds; and Customer List database to
              track 40,000 customers. Developed CD-ROM presentation: Managed design and production of a multimedia presentation for The Computer Store's segment of a CD-ROM disc produced for Mac Northwest '92. Published newspaper: Edited, designed, and
              published <q>System Update</q>, an 8-page monthly tabloid, customized for six stores. Sold advertising: Sold advertising for Intellitronics quarterly 64-page catalog.</dd>

            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a href="https://library.wou.edu/dmc/" target="_blank">Educational Media Staff:  Western Oregon University.</a></dt>
            <dd> Media Center, 1988. Video taping, editing, and dubbing.</dd>
            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a href="https://www.nwarctic.org/atc" target="_blank">Adult Education Tutor:  NW Arctic School District/Kotzebue Technical Center. </a></dt>
            <dd> Noorvik Adult Education Program, Alaska, 1984-86. Lead Personal Finance with Computers and Word Processing: AppleWorks workshops. Taught basic skills and designed instruction.</dd>
            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a href="https://www.imesd.k12.or.us/" target="_blank">Occupational Therapy Aide:  Union Education Service District.</a></dt>
          <dd>Elgin, Oregon, 1983-84. Taught fine motor and gross motor skills to elementary students. </dd>
     <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a>Assistant Director:  Comotion Dance Troup.</a> </dt>
            <dd>Organized rehearsals, performances, wrote press releases, designed all publicity, choreographed, and danced for Commotion Dance Troupe, La Grande, Oregon, 1983. </dd>
            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a href="https://wou.edu/theatre-dance/dance/" target="_blank">Vice President, Publicity Coordinator:  Disc Dance Theater.</a></dt>
            <dd> Western Oregon University, 1981-83. Organized rehearsals, designed publicity, choreographed, and danced.</dd>
            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a href="https://wou.edu/aswou/" target="_blank">Publicity Coordinator:  Associated Students.</a></dt>
            <dd>Western Oregon University. 1981-82. Designed and wrote publicity for student organizations.</dd>
            <dt itemProp="jobTitle" className="job"   itemScope   itemType="http://schema.org/Event/Job"><a href="https://wou.edu/westernhowl/" target="_blank">Photography Editor: Student newspaper, Western Oregon University</a></dt>
            <dd> 1981. Took photographs, managed a staff of photographers, designed ads.</dd>
 
          </dl>
        <p className="clear"></p>
        </div>
      </section>
    </article>

    
    <article id="education" className="resume">
      <h2><i><FaUserGraduate /></i> Education</h2>
      <dl>
        <dt><a href="http://www.wou.edu/graduate/instructional-design-certificate/" target="_blank">Master's Degree in Interdisciplinary Studies</a></dt>
        <dd>Western Oregon State College (now called Western Oregon University, WOU), 1988. Emphasis in Educational Communication Technology, Computer Science, and Art Education. Scholarship recipient. 
        Designed and field-tested Elements and Principles of
          Design Interactive Videodisc Study Module.</dd>
        <dt><a href="http://www.wou.edu/art/" target="_blank">Bachelor of Arts in Graphic Arts and Dance.</a></dt>
        <dd>Western Oregon State College, 1983</dd>
      </dl>

     <dl>
        <dt>Workshops</dt>
        <dd>Redeveloping an Online Course (2016) </dd>
        <dd>Edward Tufte's Presenting Data and Information (2000)</dd>
        <dd>Business Ecommerce (1998)</dd>
      </dl>
      <p className="clear"></p>

  </article>
 <article id="service" className="resume">
     <h2 className=""><i><RiUserCommunityFill /></i> Committees & Community</h2>
      <ul className="">
        <li>OSU College of Engineering, School of EECS Effective and Inclusive Teaching Practices Committee, 2022 to present.</li>
        <li>OSU Honor's College Task Force, 2021</li>
        <li>OSU College of Engineering, School of EECS Student Success Committee 2019 to 2021.</li>
        <li>OSU College of Engineering, School of EECS Student Success Committee, Diversity and Inclusion Subcommittee 2021.</li>
        <li>OSU College of Engineering, Web Advisory Council, 2020, 2021.</li>
        <li>OSU College of Engineering, School of EECS Career Showcase 2020, R&eacute;sum&eacute; Review.</li>
        <li>Mentor, Senior Capstone Projects course, Oregon State University, 2005, 2014. </li>
        <li>Heart of the Valley Children's Choir website Developer, 2008 to 2014.</li>
        <li>Graduate All Night Party Executive Committee Publications Chair, 2012 to 2014.</li>
        <li>Corvallis Spartan Robotics Team 997 website Developer, 2012.</li>
        <li>da Vinci Days Festival, 2002, 1991, 1990, 1989.</li>
        <li>Corvallis Art Guild website Developer 2007 to 2008.</li>
       <li>Jackson Street Youth Shelter 2006 Art Car project.</li>
        <li>Harvest Music Festival, 2005 to present. </li> 
       <li>Corvallis Graphic Innovators Group (GIG) a local guild, Founder, 1997-99.</li>

        <li>Corvallis Waldorf School, 2000-2003.</li>
      <li>Unitarian-Universalist Fellowship of Corvallis Religious Exploration mural painted, 2007.</li>
        <li>Inner Strength Gospel Choir, 1998-2001.</li>
        <li>Mid-Valley Adoptive Families, 1997-2005.</li> 
        <li>Corvallis Art Guild, Exhibiting member 1996-98, 2006 to 2008; Exhibit Chair, 1997.</li>
        <li>Unitarian-Universalist Religious Education Program, Corvallis, 1990-93.</li>
        <li>Artist Resource Team, Harding Elementary School, Corvallis, 1993-94.</li>
        <li>In Harmony, On Behalf Of Our Nation's Children, nonprofit agency, Monmouth, 1994, 1997.</li>
      </ul>

    </article> 
    
    
 
    <article id="skills"  className="resume"  itemScope   itemType="http://schema.org/ItemList"  >
    <h2><i><FaHammer /></i> Skills </h2>
      <dl>
        <dt>Technologies</dt>
        <dd>MongoDB, Express, React, Node.js, CSS, HTML, JavaScript, PHP, MySQL, front-end development, and back-end development.</dd>
        <dd>Google Suite and Microsoft Office Suite for MacOS, Windows, Chromebook</dd>

        <dt>Leadership and Business</dt>
        <dd>Instructional design, marketing consulting, and project management</dd>
        
        <dt>Art & Design</dt>
        <dd>Painting commissions, exhibits, and sales.</dd>
        <dd>Print and online materials design.</dd>
      </dl>
  

{/*  
      <table id="skillstable">
        <caption><h2><i className="material-icons">build</i> Creative &amp; Technical Skills</h2></caption>
        <tbody>
          <tr>
            <th className='no-sort skill' itemProp="itemListElement">Marketing Consultant</th>
            <td colspan="2">30+ years of experience</td>
            <td></td>
          <tr>
            <th className='no-sort skill' itemProp="itemListElement">Project, Content, and Asset Manager</th>
            <td colspan="2">23+ years of experience</td>
            <td></td>
          </tr>
          </tr>
            <th className='no-sort skill' itemProp="itemListElement">Instructional Designer</th>
            <td colspan="3">30+ years of experience</td>
            <td></td>
          </tr>

          <tr>
            <th className='no-sort skill' itemProp="itemListElement">Front-end Website Development</th>
            <td colspan="2">21 years of experience</td>
            <td></td>
          </tr>
          <tr>
            <th className='no-sort skill' itemProp="itemListElement">Painter &amp; Digital Illustrator</th>
            <td colspan="3">30+ years of experience</td>
          </tr>
          <tr>
            <th className='no-sort skill' itemProp="itemListElement">Print Designer</th>
            <td colspan="3">30+ years of experience</td>
          </tr>
        </tbody>
        <tfoot >
          <tr>
            <th colspan="4"></th>
          </tr>
        </tfoot>
      </table>
    */}
       <h2><i><FaAward /></i> Awards</h2>
      <dl id="awards" className="resume">
        <dd>Society for Technical Communication&#8217;s Award of Achievement (1995) CSS Sales Assistant Manual.</dd>
        <dd>Society for Technical Communication&#8217;s Award of Merit (1996)  Rogue Wave Software DBTools.h++ brochure.</dd>
        <dd>Society for Technical Communication&#8217;s Award of Merit (1996)  Microsoft Case Studies brochure.</dd>
        <dd>National Flagship Recognition award (1999)  Heads Up! website developed in collaboration with the USDA&#8217;s Cooperative Extension Service.</dd>
        <dd>Distance Learning Community of Practice (Meritorious Award (2002) OSU&#8217;s Extended Campus course design WS 223 Women, Self, and Society. </dd>
         <dd>Apple Hero Award (1993) Presented by Apple Computer, Inc. following three successful education conferences developed for The Computer Store/Computer Stores NW.</dd>
        </dl>
      <p className="clear"></p>
    </article>
    </>

    )
} 
export default ResumePage;