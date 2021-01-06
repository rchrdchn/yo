import React from 'react';
import { Link } from "react-router-dom";
import Resume from '../assets/RichardChanResume2021.pdf';

const Home = () => (
    <div className="home">
        <div>
            <h4>My page is designed and built with only what's needed. No more, no less.</h4>
        </div>
        <div>
            <h2 className="title">Contact</h2>
            <p>
                <span role="img" aria-label="mailbox">📮</span><a href="mailto:chan@hey.com"><strong>chan@hey.com</strong></a><span> /</span>
                <span role="img" aria-label="linkedin">👨‍💻</span><a href="https://www.linkedin.com/in/rchrdchn/" target="_blank" rel="noopener noreferrer"><strong>LinkedIn</strong></a><span> /</span>
                <span role="img" aria-label="github">🖥</span><a href="https://github.com/rchrdchn" target="_blank" rel="noopener noreferrer"><strong>GitHub </strong></a><span> /</span>
                <span role="img" aria-label="resume">📄</span><a href={Resume} download="RichardChanResume" rel="noopener noreferrer"><strong>Resume</strong></a>
            </p>
        </div>
        <div>
            <h2 className="title">What am I doing now?</h2>
            <p><span role="img" aria-label="now">👋</span>Check out my <Link to="/now"><strong>"now"</strong></Link> page</p>
            <p><span role="img" aria-label="blog">📝</span>Blogging at <a href="http://notyourtypicalasian.com/" target="_blank" rel="noopener noreferrer"><strong>www.notyourtypicalasian.com</strong></a></p>
        </div>
        <div className="short">
            <h2 className="title">Me in 30 seconds</h2>
            <p><strong>Curious.</strong> I learn what I don't know. I want to learn and understand as many new concepts, ideas, mental and business frameworks, philosophies, lifestyles as possible.</p>
            <p><strong>Driven.</strong> I work tirelessly and single-mindedly in the pursuit of my life goals. I'm not complacent and I'm willing to do what it takes.</p>
            <p><strong>Resilient.</strong> Fall seven times, get up eight. I never give up working for what I want in life, even if it takes me a lifetime to get there.</p>
            <p><strong>Passionate.</strong> I narrowed down my interests to only a handful, so I can deliberately put my focus, heart and passion to pursue each one of them.</p>
            <p><strong>Competitive.</strong> I have a sportsman mindset. I play to win, but I'm nothing without my team, so I always put the team first.</p>
            <p><strong>Kind-hearted.</strong> I enjoy being a friend of my friends, being genuine, honest and caring, and last, but not least, I enjoy giving back.</p>
            <p><strong>Long-term thinker.</strong> All I do is for my future self. I want to regret nothing when I'm 80.</p>
            <p><strong>Multi-cultural.</strong> Born in California. Raised in Venezuela. Studied in California and Hong Kong. Currently living in the Bay Area.</p>
            <p><strong>Things I enjoy:</strong> Spending time with friends and family, running marathons, playing soccer, programming, reading books, exploring new countries and cultures, learning new technologies and languages - Spanish, English, and Cantonese.</p>
        </div>
    </div>
)

export default Home;