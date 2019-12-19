import React from 'react';
import { Link } from "react-router-dom";
import Running from '../assets/running.jpg';
import Family from '../assets/family.jpg';
import Learning from '../assets/learning.jpg';
import Soccer from '../assets/soccer.jpg';
import Exploring from '../assets/exploring.jpg';

const Home = () => (
    <div className="home">
        <div>
            <h4>My site is designed and built with only what's needed. No more, no less.</h4>
        </div>
        <div>
            <h2>Me in 30 seconds</h2>
            <p><strong>Curious.</strong> I want to learn and understand as many new concepts, ideas, frameworks, mental and business models, philosophies, lifestyles as possible.</p>
            <p><strong>Driven.</strong> I work tirelessly and single-mindedly in the pursuit of my life goals.</p>
            <p><strong>Resilient.</strong> I never give up working for what I want in life, even if it takes me a lifetime to get there.</p>
            <p><strong>Passionate.</strong> I narrowed down my interests to only a handful, so I can deliberately put my focus, heart and passion to pursue each one of them.</p>
            <p><strong>Competitive.</strong> I have a sportsman mindset. I play to win, but nothing without my team, so I always put my team first.</p>
            <p><strong>Kind-hearted.</strong> I enjoy being a friend of my friends, being genuine, honest and caring, and last, but not least, I enjoy giving back.</p>
            <p><strong>Long-term thinker.</strong> All I do is for my future self. I want to regret nothing when I'm 80.</p>
            <p><strong>Multi-cultural.</strong> Born in California. Raised in Venezuela. Studied in California and Hong Kong. Currently living in the Bay Area.</p>
            <p><strong>Things I enjoy:</strong> Spending time with friends and family, running marathons, playing soccer, programming, reading books, exploring new countries and cultures, learning new technologies and languages (I'm native in Spanish, fluent in English and Cantonese)</p>
        </div>
        <div>
            <h2>What am I doing now?</h2>
            <p>Check out my <Link to="/now"><strong>"now"</strong></Link> page</p>
        </div>
        <div>
            <h2>Contact me?</h2>
            <p>I enjoy making new friends and connecting with people around the world.</p>
            <p><a href="mailto:richardchanme@gmail.com"><strong>Say hi</strong> <span role="img" aria-label="hi">👋</span></a> - I try replying to all emails</p>
            <p>Connect with me on <a href="https://www.linkedin.com/in/rchrdchn/" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a></p>
            <p>Check out what I've been working on: <a href="https://github.com/rchrdchn" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a></p>
        </div>
        <div className="home_photos">
            <h2>Photos <span>click to expand</span></h2>
            <a href={Family}><img src={Family} alt="Family"/></a>
            <a href={Learning}><img src={Learning} alt="Learning"/></a>
            <a href={Running}><img src={Running} alt="Running"/></a>
            <a href={Soccer}><img src={Soccer} alt="Soccer"/></a>
            <a href={Exploring}><img src={Exploring} alt="Exploring"/></a>
        </div>
    </div>
    // <div>
    //     <div class="intro col-md-12">
    //         <h2 class="intro__title">Me...</h2>
    //         <p>I'm a passionate and curious Web Developer and I enjoy building for the web. I can talk about business, marketing, analytics, and design, as much as I can talk about programming and technology. Turning design specifications into meaningful and easy-to-use user interfaces and experiences is my craft. And I work on perfecting it every day.</p>
    //         <p>I'm also familiar with technologies such as React and Ruby on Rails, as I'm constantly curious and learning new skills to build my own projects or for my future self. I'm passionate and ambitious like that. But I'm also a humble <a href="#team-player" title="Richard's warm and friendly attitude makes him a great team-player.">team-player</a> who can play well with people from diverse backgrounds, cultures, views, and opinions because I value the <a href="#teamwork" title="Richard works hard for the greater good of the team, the company, and most importantly, the clients.">greater good of the team</a> over everything else.</p>
    //         <p>I also value kindness, transparency, long-term approaches, as well as deep, meaningful, and uninterrupted work. I believe 8 hours per day, 40 hours per week is more than enough to get great work done. In this sense, I enjoy finding the flow and focusing on one task at a time, but I also <a href="#prioritize" title="Richard is so easy-going and flexible, and juggles competing and pivoting priorities with grace.">know how to be flexible and when to prioritize</a> and make the switch on any given moment. I enjoy exploring and experimenting with websites and animations and pushing CSS to its limits. I'm a self-starter who always tries to leave things better than I found them.</p>
    //         <h2 class="intro__title">What I do</h2>
    //         <p>For the past two years, I led the Web Development team at <a href="https://www.ascendify.com" title="Ascendify" target="_blank" rel="noopener noreferrer">Ascendify</a> to build client websites from the ground up. <a href="#ground" title="The foundational elements Richard created have left a lasting impact on our team.">I wrote over a dozen pieces of documentation</a>, <a href="#ground" title="Believe me, I did create a ton of them that made other Web Developers' life easier.">created reusable templates and processes</a>, <a href="#websites" title="I'm pretty proud of these projects.">developed and maintained large amounts of client sites</a>, and kept clients happy and satisfied with design and development updates. All while collaborating with key project members ranging from Marketers, Designers, and Developers to QAers, Project Managers, and Executives. It was a wonderful journey and I can't be more thankful for the experience.</p>
    //         <h3 class="intro__thankyounext">As I think what's next, Doist comes to mind.  I think Doist is that next challenge in my career.</h3>
    //         <h2 class="intro__title">Why Doist?</h2>
    //         <p>Family, friends, and coworkers say <a href="#organized" title="Richard is extremely organized.">I'm extremely organized and productive</a>. It's true – I have been most of my life and I'm proud of it. I believe that working remotely during college taught me to have a <a href="#workethic" title="Richard's can do attitude and fantastic work ethic quickly made him become an invaluable asset to the company.">strong work ethic</a>, to value my time and attention, and to work on things that are under my control.</p>
    //         <p>Less than a year ago, I discovered Todoist and made the switch from using a Calendar to using Todoist to stay productive and organized on a daily basis. Since then, organizing my days have been far more enjoyable and exciting – I use it happily and passionately (<i>let's not tell anybody, but using Todoist makes me smile day and night. Every. Single. Time</i> 😊), so much that I even reached <a href="https://todoist.com/review/2018/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJUdEFTc0t6SCIsInVpZCI6MzcwNjYyMCwieWVhciI6MjAxOH0.UKpJgLi-_ACvXOZvV61017DrDFEotm4R0wVZ2BsJXMg" target="_blank" rel="noopener noreferrer" title="Todoist year in review">Master level</a> in a little over six months and have less than 4,500 points before reaching Grand Master level 📈.</p>
    //         <p>In this time, I have also come to admire the team behind Todoist and Doist's mission, vision, values, products, and long-term approach. Therefore, I want to add value to the company and its members by being an active contributor in helping Doist improve existing processes, create new frameworks, and push the standards even higher as its next Web Developer.</p>

    //         <h2 class="intro__title">Outside of work</h2>
    //         <p>I enjoy spending time with <a href="https://www.instagram.com/p/BsB3Zo4nnlx/" target="_blank" rel="noopener noreferrer" title="My newborn niece ❤️">friends and family</a>, <a href="https://www.instagram.com/p/BorJl4HFS_8/" target="_blank" rel="noopener noreferrer" title="Running my 6th full marathon in Chicago">running marathons</a>, <a href="https://www.instagram.com/p/BsZ5HwinET2/" target="_blank" rel="noopener noreferrer" title="Check this out - it's me playing fútbol :)">playing fútbol</a>, <a href="https://www.instagram.com/p/Ba7nR8WFzeU/" target="_blank" rel="noopener noreferrer" title="I travel here and there when I get the opportunity">exploring new countries and cultures</a>, journaling through <a href="https://rchrdchn.com/" target="_blank" rel="noopener noreferrer" title="personal blog">writings</a> and photographies, learning new technologies and languages (I'm native in Spanish, fluent in English and Cantonese), and <a href="https://www.instagram.com/p/BCTBMx9onJN/" target="_blank" rel="noopener noreferrer" title="books and books and books">reading a wide array of books</a>, from biographical and philosophical to scientifical and technological books.</p>
    //     </div>

    //     <div class="work col-md-12" id="websites">
    //         <h2>Imagery</h2>
    //         <p>Here are some projects I'm pretty proud of. I designed some of them, I led on most of them, and I actively contributed on all of them.</p>
    //         <div class="col-sm-12 col-md-6 col-lg-4">
    //             <div class="caption text-center">
    //                 <p><strong>Ascendify</strong> <i> - Corporate Website</i></p>
    //             </div>
    //             <a href="https://www.ascendify.com" class="thumbnail" target="_blank" rel="noopener noreferrer">
    //                 <img src="images/doist/ascendify.png" alt="Ascendify" class="img-responsive"/>
    //             </a>
    //         </div>
    //         <div class="col-sm-12 col-md-6 col-lg-4">
    //             <div class="caption text-center">
    //                 <p><strong>TTEC</strong> <i> - Career Website</i></p>
    //             </div>
    //             <a href="https://www.ttecjobs.com/" class="thumbnail" target="_blank" rel="noopener noreferrer">
    //                 <img src="images/doist/ttec.png" alt="TTEC" class="img-responsive"/>
    //             </a>
    //         </div>
    //         <div class="col-sm-12 col-md-6 col-lg-4">
    //             <div class="caption text-center">
    //                 <p><strong>WellSpan</strong> <i> - Career Website</i></p>
    //             </div>
    //             <a href="https://www.joinwellspan.org" class="thumbnail" target="_blank" rel="noopener noreferrer">
    //                 <img src="images/doist/wellspan.png" alt="WellSpan" class="img-responsive"/>
    //             </a>
    //         </div>
    //         <div class="col-sm-12 col-md-6 col-lg-4">
    //             <div class="caption text-center">
    //                 <p><strong>Blackboard</strong> <i> - Career Website</i></p>
    //             </div>
    //             <a href="https://careers.blackboard.com/" class="thumbnail" target="_blank" rel="noopener noreferrer">
    //                 <img src="images/doist/blackboard.png" alt="Blackboard" class="img-responsive"/>
    //             </a>
    //         </div>
    //         <div class="col-sm-12 col-md-6 col-lg-4">
    //             <div class="caption text-center">
    //                 <p><strong>Synergy Massage</strong> <i> - Corporate Website</i></p>
    //             </div>
    //             <a href="http://sfsynergymassage.com" class="thumbnail" target="_blank" rel="noopener noreferrer">
    //                 <img src="images/doist/synergy.png" alt="Synergy" class="img-responsive"/>
    //             </a>
    //         </div>
    //         <div class="col-sm-12 col-md-6 col-lg-4">
    //             <div class="caption text-center">
    //                 <p><strong>GE Digital</strong> <i> - Career Website</i></p>
    //             </div>
    //             <a href="https://talent.gecareers.com/digital" class="thumbnail" target="_blank" rel="noopener noreferrer">
    //                 <img src="images/doist/ge-digital.png" alt="GE Digital" class="img-responsive"/>
    //             </a>
    //         </div>
    //     </div>

    //     <div class="quotes col-md-12">
    //         <h2>What people say about me</h2>
    //         <p>These words are from people I had the great pleasure of working with and learning from. I pulled these out from my <a href="http://linkedin.com/in/rchrdchn/" target="_blank" rel="noopener noreferrer" title="Click, click, click...">LinkedIn profile</a> 😊</p>
    //         <blockquote>
    //             <p><i>"Richard is a super talented Software Engineer and dedicated, passionate teammate. Richard started with in Web Development and quickly moved onto our Frontend Engineering team working in React. He's someone you can rely on to get things done at a quality level - he takes great pride in his work."</i></p>
    //             <p><strong>Chief Executive Officer</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"Richard came to Ascendify as a Web Developer but worked his way up to being a full member of our Frontend Engineering team. You won't find anyone with more drive or passion in his work."</i></p>
    //             <p><strong>Vice President, Engineering</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"His attention to detail and great communication skills helped the team move through any project with ease. I was particularly impressed with the quality of work Richard delivers. His ability to learn fast helped him move to our team and become a Frontend Engineer."</i></p>
    //             <p><strong>Team Lead, Software Engineer</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"The two words that best describe Richard's work are "Pixel Perfect". He takes great pride in producing beautiful websites per specifications. Richard is extremely <span id="organized">organized</span>, and sets realistic expectations for delivery time-frames. He is a team player, and <span id="teamwork">works hard for the greater good of the team, the company, and most importantly, the clients</span>. He is so easy-going and flexible, and <span id="prioritize">juggles competing and pivoting priorities with grace</span>."</i></p>
    //             <p><strong>Project Manager</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"In a couple short months, Richard quickly became the primary Web Developer my team relied on to design, build and support the career websites of our Fortune 500 clients. Not only is he an excellent Web Developer and Frontend Engineer, he is exceptional with documentation and code cleanup. <span id="ground">The foundational elements (documentation, best practices, code templates) he created have left a lasting impact on our team</span>. He was such a pleasure to work with, can-do attitude, always craving more to learn and studying in spare time. I’m envious of the future engineering teams who will have the pleasure of working with Richard!"</i></p>
    //             <p><strong>Vice President, Professional Services</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"Richard is a talented Web Developer and Frontend Engineer. I've had the privilege to see him grow into his role in front-end development. Richard is highly motivated to get the job done with precision and attention to detail. <span id="team-player">His warm and friendly attitude makes him a great team-player</span>. Given a task, he can run with it and amaze you with the quality of his workmanship. He consistently adds value to the team and elevates our collaborative atmosphere with his passion to excel. Richard carries himself with humility as he demonstrates his multiple talents in everything he does, whether at work or outside the office."</i></p>
    //             <p><strong>Software Engineer</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"Richard is not only an exceptionally talented Web Developer / Frontend Engineer, he is an amazing colleague to work with. Richard is smart, creative, organized, and reliable - never missing a deadline. Richard creates beautiful websites, with exceptional built-in functionality, and is always willing to offer recommendations or find ways to improve the user experience."</i></p>
    //             <p><strong>Senior Project Manager</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"Richard gets work done! If you are looking for a Web Developer who will give you all he has got, then Richard is your man. He is not afraid of a challenge, works well with others, and learns on his own. Richard made us all look good. Get him if you can and you will be glad you did."</i></p>
    //             <p><strong>Chief Executive Officer</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"Richard was a phenomenal Web Developer for me and my marketing team. Smart, creative, responsive and super-fast at getting things done, while deliberative &amp; careful to make sure things looked great &amp; worked perfectly. Very often he'd come up with better ideas for us than whatever we'd submitted in our tickets to him, and we'd happily end up doing it his recommended way. Richard has a terrific eye for detail and is a big advocate for a first-rate online customer experience."</i></p>
    //             <p><strong>Vice President, Marketing</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"He put his whole heart into his projects from the get-go trying to surpass everyone's expectations and trying to do more. Richard's can do attitude and fantastic <span id="workethic">work ethic</span> quickly made him become an invaluable asset to the company. He never stopped learning, was always highly dedicated to meet his weekly goals. Richard is a great person to be around who also jumped into the company culture quickly and became an active participant in everything we did at the company."</i></p>
    //             <p><strong>Controller</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"Richard is awesome to work with! Not only is he a really good developer with a great eye for design, but he is also incredibly dedicated to constantly learning and improving his skills. His passion is contagious and spreads to everyone around him."</i></p>
    //             <p><strong>Frontend Web Developer</strong></p>
    //         </blockquote>
    //         <blockquote>
    //             <p><i>"Richard is a hard-working, go-getter who's a pleasure to work with. In this day and age, it's hard to find younger employees willing to be devoted to projects big and small. Richard is humble and eager to learn. I always admired how dedicated he was to getting his work done, even if it meant being one of the first ones to arrive at the office. It was truly a pleasure to get to work with him."</i></p>
    //             <p><strong>Creative Director</strong></p>
    //         </blockquote>
    //     </div>
    // </div>
)

export default Home;