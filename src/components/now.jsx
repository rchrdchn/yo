import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import books from './books.js';
import { renderBooks } from './readings';

const Now = () => (
    <div className="now">
        <div className="now_section">
            <h2 className="title">What I'm doing now</h2>
        </div>
        <div className="now_section">
            <h3>Personal <span role="img" aria-label="emoji">🐶</span></h3>
            <p>My girlfriend and I got a mini schnauzer puppy back in December and we can't believe it's almost been a year. Time flies when you're raising kids - or in this case, a puppy. He is the quite the character - playful, quick-to-learn tricks, loyal, naughty, and last but not least, protective of his food providers (us) <span role="img" aria-label="emoji">🤣</span>.</p>

            <h3>Work <span role="img" aria-label="emoji">👨‍💻</span></h3>
            <p>I've been working at <a rel='noreferrer noopener' href="https://www.successfactors.com/index.html" target="_blank"><strong>SAP</strong></a> as a UI Engineer  for almost four years now - building its newest generation of software applications and products from a reimagined point-of-view using ReactJS, Redux and other cool technologies <span role="img" aria-label="emoji">😎</span>.</p>

            <h3>Travels <span role="img" aria-label="emoji">✈️</span></h3>
            <p>There have been more international travels in my agenda this year as most countries started opening up after the pandemic. I travelled to Europe twice - first to run the Paris marathon <span role="img" aria-label="emoji">🇫🇷</span> and do touristy things around Portugal <span role="img" aria-label="emoji">🇵🇹</span>; then second to attend a friend's wedding in the UK <span role="img" aria-label="emoji">🇬🇧</span> and visit a college friend in Copenhagen 🇩🇰. Wedding season also took me to Vancouver <span role="img" aria-label="emoji">🇨🇦</span> and New York <span role="img" aria-label="emoji">🇺🇸</span>. Later this year, I'm expecting to visit my brother, whom I haven't seen for almost five years, in Buenos Aires, Argentina <span role="img" aria-label="emoji">🇦🇷</span>.</p>

            <h3>Running <span role="img" aria-label="emoji">🏃‍♂️</span></h3>
            <p>Sticking to my one-marathon-per-year plan, I ran and finished the Paris 2022 marathon with a personal best of 3h:36m. Woohoo! <span role="img" aria-label="emoji">🎉</span> — Similarly, I ran and set another personal best for a half marathon finishing with a 1h:37m. My running season was long and I couldn't be happier to achieve these two goals this year. As of this writing, I have stopped running long distances to focus on my first love: soccer. <span role="img" aria-label="emoji">❤️</span></p>
            
            <h3>Soccer <span role="img" aria-label="emoji">⚽️</span></h3>
            <p>For those who know me, I'm a bit of a soccer geek. I grew up playing competitive soccer in Venezuela <span role="img" aria-label="emoji">🇻🇪</span>. I played for over ten years before deciding to put a full stop and focus on college and other activities. But I didn't hesitate the moment my good friend Hugo reached out asking me to join a team playing in a NorCal league. So I've been training and playing competitive soccer since around July. I've been loving every minute of it!</p>
            
            <h3>Study abroad reunion <span role="img" aria-label="emoji">🥰</span></h3>
            <p>My Hong Kong exchange friends and I met in the UK to attend one of our group's friend wedding - congrats Kieran <span role="img" aria-label="emoji">🥳</span>. It was fun seeing everybody again and hanging out around London and Essex. It was short but sweet. To be honest, nobody knows when we will all see each other again since we all have busy life, work and family agendas.</p>

            <h3>Habits <span role="img" aria-label="emoji">🥅</span></h3>
            <p>I've started a new process of tracking goals in my life, in which I set three to five weekly and monthly goals. I've always thought annual goals are too far away, so I tried experimenting <span role="img" aria-label="emoji">👨‍🔬</span> with different timeframes - three-month and six-week goals… None of these fully made sense. I have long-term general and specific goals, but I like focusing on the day-to-day and week-to-week goals because they remove the far-away layer of the annual goal and focus on the short-to-mid term goals.</p>

            <h3>Writings <span role="img" aria-label="emoji">📝</span></h3>
            <p>I consistently write <em>raw thoughts</em> on my blog - topics that have been on my mind during the past days, weeks, and sometimes months: <a rel='noreferrer noopener' href="https://notyourtypicalasian.com" target="_blank"><strong>www.notyourtypicalasian.com</strong></a> </p>
        </div>
        <div className="now_section">
            <p><em>Last updated November 1, 2022.</em></p>
        </div>
        <div className="now_section">
            <div className="reads">
                <h3>Currently reading <span role="img" aria-label="emoji">📚</span></h3>
                <p><Link to="/readings">Complete reading list</Link></p>
            </div>
            <div>
                {renderBooks(books, true)}
            </div>
        </div>
    </div>
)

export default Now;