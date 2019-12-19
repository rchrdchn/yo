import React from 'react';
import { Link } from "react-router-dom";

import Running from '../assets/photos/running.jpg';
import Family from '../assets/photos/family.jpg';
import Learning from '../assets/photos/learning.jpg';
import Soccer from '../assets/photos/soccer.jpg';
import Exploring from '../assets/photos/exploring.jpg';

import Resume from '../assets/RichardChanResume2020.pdf';

const Home = () => (
    <div className="home">
        <div>
            <h4>My page is designed and built with only what's needed. No more, no less.</h4>
        </div>
        <div>
            <h2>Me in 30 seconds</h2>
            <p><strong>Curious.</strong> I want to learn and understand as many new concepts, ideas, frameworks, mental and business models, philosophies, lifestyles as possible.</p>
            <p><strong>Driven.</strong> I work tirelessly and single-mindedly in the pursuit of my life goals.</p>
            <p><strong>Resilient.</strong> Fall seven times, get up eight. I never give up working for what I want in life, even if it takes me a lifetime to get there.</p>
            <p><strong>Passionate.</strong> I narrowed down my interests to only a handful, so I can deliberately put my focus, heart and passion to pursue each one of them.</p>
            <p><strong>Competitive.</strong> I have a sportsman mindset. I play to win, but I'm nothing without my team, so I always put the team first.</p>
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
            <h2>So, contact me?</h2>
            <p>I enjoy making new friends and connecting with people around the world.</p>
            <p><a href="mailto:richardchanme@gmail.com"><strong>Say hi</strong> <span role="img" aria-label="hi">👋</span></a> - I try replying to all emails</p>
            <p>Connect with me on <a href="https://www.linkedin.com/in/rchrdchn/" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a></p>
            <p>Check out what I've been working on: <a href="https://github.com/rchrdchn" target="_blank" rel="noopener noreferrer"><strong>GitHub</strong></a></p>
            <p>Take a look at <a href={Resume} target="_blank" rel="noopener noreferrer"><strong>my resume</strong></a></p>
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
)

export default Home;