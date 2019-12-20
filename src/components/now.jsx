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
            <p>I've been working at <a rel='noreferrer noopener' href="https://www.successfactors.com/index.html" target="_blank">SAP SuccessFactors</a> as a Frontend Engineer for close to a year.</p>

            <h3>Travels <span role="img" aria-label="emoji">✈️</span></h3>
            <p>I recently lived in Rome, Italy and travelled around Europe visiting friends (Berlin, Munich, Prague, Florence, Geneva, Lausanne, Madrid, and Mallorca). You can follow <a rel='noreferrer noopener' href="https://www.instagram.com/rchrdchn" target="_blank">my journey here</a>!</p>

            <h3>Running ‍<span role="img" aria-label="emoji">🏃‍♂️</span></h3>
            <p>At the end of September, I ran the Berlin marathon, one of the six <a rel='noreferrer noopener' href="https://www.worldmarathonmajors.com/" target="_blank">World Major Marathons</a>. It was a tough tough tough marathon under rainy, windy, and cold conditions! I struggled really hard, but kept pushing until the finish line recording a 4-hour running time.</p>
            
            <h3>Study abroad reunion <span role="img" aria-label="emoji">🇨🇿</span></h3>
            <p>My Hong Kong exchange friends and I recently met up in Prague, Czech Republic for our 5th consecutive study abroad reunion. Previous meetups were: New York '15, San Francisco '16, Barcelona '17, and New York '18.</p>

            <h3>New habits <span role="img" aria-label="emoji">🧘‍♂️</span></h3>
            <p>I’ve doubled down on long-term habits and continued many new habits I started last year: daily meditations, yoga, readings, journaling, and trying to sleep 8 hours. However, I'll add some new ones going forward: no alcohol, reduce the amount of protein in my daily meals, and reduce sugar and coffee intake.</p>

            <h3>Writings <span role="img" aria-label="emoji">📝</span></h3>
            <p>I often write <em>raw thoughts</em> here – it's my scratchpad: <a rel='noreferrer noopener' href="https://notyourtypicalasian.com" target="_blank">https://notyourtypicalasian.com</a></p>
        </div>
        <div className="now_section">
            <h3>Currently reading <span role="img" aria-label="emoji">📚</span></h3>
            <div>
                {renderBooks(books, true)}
                <p>You can <Link to="/readings">see my complete reading list</Link></p>
            </div>
        </div>
        <div className="now_section">
            <p><em>This page was updated Dec 18, 2019. Inspired by <a rel='noreferrer noopener' href="https://sivers.org" target="_blank">Derek Sivers</a> and his <a rel='noreferrer noopener' href="https://sivers.org/now">/now</a> page.</em></p>
        </div>
    </div>
)

export default Now;