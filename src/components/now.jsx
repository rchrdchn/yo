import React from 'react';
import { Link } from 'react-router-dom';
import '../App.scss';
import books from './books.js';
import { renderBooks } from './readings';

const Now = () => (
    <div className="now">
        <div className="now_section">
            <h2 className="title">What I’m doing now</h2>
        </div>
        <div className="now_section">
            <h3>Work <span role="img" aria-label="emoji">👨‍💻</span></h3>
            <p>I've been working at <a rel='noreferrer noopener' href="https://www.successfactors.com/index.html" target="_blank"><strong>SAP</strong></a> as a UI Engineer for close to two years now - building its newest generation of software applications and products from a reimagined point-of-view using HTML5, CSS (SCSS), JavaScript (ES6), ReactJS, Redux, and Web Components.</p>

            <h3>Travels <span role="img" aria-label="emoji">✈️</span></h3>
            <p>After living in Rome and traveling around Europe during late 2019, there were some travel plans for 2020. Unfortunatelly, it wasn't the best year for traveling, especially with the current pandemic still not being under control. Hopefully, one day when it's all over we can start planning travels again. You can check out all my travels and photos on my <a rel='noreferrer noopener' href="https://www.instagram.com/rchrdchn" target="_blank"><strong>Instagram</strong></a>!</p>

            <h3>Running ‍<span role="img" aria-label="emoji">🏃‍♂️</span></h3>
            <p>There were no major running events during 2020, yet I continue running and training on my own and with a small and close group of friends to stay active, break the routine, and keep it fun. I have decided to stick to my one-marathon-per-year plan, so hopefully I can run at least one marathon this year.</p>
            
            <h3>Study abroad reunion <span role="img" aria-label="emoji">📱</span></h3>
            <p>My Hong Kong exchange friends and I hangout over videochats now given the current state of affairs. And simply because we all have our own things going on... Jacob got married in Accra, Ghana (congrats!), and the whole gang couldn't attend the ceremony due to travel restrictions. But we will get together for a reunion and celebrate as soon as we can travel again.</p>

            <h3>Habits <span role="img" aria-label="emoji">🧘‍♂️</span></h3>
            <p>I feel I've got to a point in which my espresso is consistely on point, so I'm happy with the progress there. Cafecito break is a daily moment I take to write, read, or simply think and reflect. It's a special time I look forward to every day.</p>
            <p>I've started stretching every morning, and going for long walks and doing yoga every day - what a release it's been for my body! These have been crucial as I'm working from home and sometimes forget to take break in between the heavy work-load.</p>

            <h3>Writings <span role="img" aria-label="emoji">📝</span></h3>
            <p>I consistently write <em>raw thoughts</em> on my blog - topics that have been on my mind during the past days, weeks, and sometimes months: <a rel='noreferrer noopener' href="https://notyourtypicalasian.com" target="_blank"><strong>www.notyourtypicalasian.com</strong></a></p>
        </div>
        <div className="now_section">
            <p><em>Last updated January 5, 2021.</em></p>
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