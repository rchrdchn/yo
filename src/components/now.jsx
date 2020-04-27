import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import books from './books.js';
import { renderBooks } from './readings';

const Now = () => (
    <div className="now">
        <div className="now_section">
            <h2>What I’m doing now</h2>
        </div>
        <div className="now_section">
            <h3>Work <span role="img" aria-label="emoji">👨‍💻</span></h3>
            <p>I've been at <a rel='noreferrer noopener' href="https://www.successfactors.com/index.html" target="_blank">SAP SuccessFactors</a> as a UI Engineer for over a year now building its new generation of software products from a reimagined point-of-view using ReactJS.</p>

            <h3>Travels <span role="img" aria-label="emoji">✈️</span></h3>
            <p>After coming back from living in Rome and traveling around Europe, there hasn't been much in the plans for the current year as COVID-19 is occuring. Hopefully, one day when the epidemic is over we can start planning travels again. You can check out all my travels <a rel='noreferrer noopener' href="https://www.instagram.com/rchrdchn" target="_blank">here</a>!</p>

            <h3>Running ‍<span role="img" aria-label="emoji">🏃‍♂️</span></h3>
            <p>I decided to stick to my one-marathon-per-year plan, so choosing San Francisco was natural since I don't have to travel far away or adapt to a different time zone. However, I decided to take the challenge of being not only a trainee, but a pacer for my training running club - RUN365 - this time around... But, COVID-19 happened and I made the decision to stop training at a marathon pace while we are in lockdown to make sure family is safe.</p>
            
            <h3>Study abroad reunion <span role="img" aria-label="emoji">📱</span></h3>
            <p>My Hong Kong exchange friends and I hangout over videochats now given the current state of affairs. And simply because we all have our own things going on...</p>

            <h3>New habits <span role="img" aria-label="emoji">🧘‍♂️</span></h3>
            <p>I keep going back to the basics because it just works: 8 hours of sleep, daily meditations, yoga. I need to improve my reading, journaling, and experimenting with code habits.</p>
            <p>Good news: no amount of alcohol in over six months.</p>
            <p>Bad news: increased amount of caffeine over the past two months.</p>

            <h3>Writings <span role="img" aria-label="emoji">📝</span></h3>
            <p>I often write <em>raw thoughts</em> here – it's my scratchpad: <a rel='noreferrer noopener' href="https://notyourtypicalasian.com" target="_blank">https://notyourtypicalasian.com</a></p>
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
        <div className="now_section">
            <p><em>This page was updated April 26, 2020. Inspired by <a rel='noreferrer noopener' href="https://sivers.org" target="_blank">Derek Sivers</a> and his <a rel='noreferrer noopener' href="https://sivers.org/now">/now</a> page.</em></p>
        </div>
    </div>
)

export default Now;