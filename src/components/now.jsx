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
            <p>Anna and I moved in and have been living together. That's the biggest change so far this year. Living together has deepen our relationship and taught us how to communicate more effectively and interact more meaningfully with each other. Other than that, I think Kiba, our mini schnauzer, is probably the happiest and biggest benefactor. He now has both of us in one place and doesn't have to go back and forth between different places feeling like having divorced parents.</p>

            <h3>Work <span role="img" aria-label="emoji">👨‍💻</span></h3>
            <p>I've been working at SAP as a UI Engineer for over four years now, which feels like an eternity in Silicon Valley life. The company had a round of layoff earlier this year, which unfortunately, affected around 3,000 people. Our team was  lucky. Nobody got affected. The job market has been tough for the past year. It feels like surfing a big wave. You are never safe and has to go with the punches.</p>

            <h3>Travels <span role="img" aria-label="emoji">✈️</span></h3>
            <p>Traveling went back to normal. I went to Buenos Aires 🇦🇷 last year to visit my brother and his family after five years of not seeing him. It was a good time. Spending time with family makes me happiest these days. Buenos Aires treated us well. We also went on a good time. It was the World Cup and everyone was hopeful Messi and co would bring the cup home, which is what ended up happening. This summer Anna and I traveled around Europe and other places - Milan 🇮🇹, Nice 🇫🇷, Monaco 🇲🇨 and Boston 🇺🇸 for friends' weddings 👰‍♀️.</p>

            <h3>Running <span role="img" aria-label="emoji">🏃‍♂️</span></h3>
            <p>Playing soccer didn't exactly work out as expected, so I've decided to pause it for now and go back into running casually. I didn't plan or sign up for any races this year so I'm learning how to take it easy and enjoy running for the sake of it, while trying to guide and mentor other runners in our marathon group - RUN365 - to train for their races and marathons. I still have my mind on running all the major marathons (Chicago, Berlin, London, Tokyo, NYC and Boston) and qualifying for the Boston Marathon one day.</p>

            <h3>Study abroad reunion <span role="img" aria-label="emoji">🥰</span></h3>
            <p>We don't plan study abroad reunions nowadays since everybody have their own travel plans. So things are happening naturally. What's a better excuse to see each other than attending our friends' weddings? I'm looking forward to seeing the guys and spending quality time together. It's more difficult as years go by. But this was expected.</p>

            <h3>Writings <span role="img" aria-label="emoji">📝</span></h3>
            <p>I consistently write <em>raw thoughts</em> on my blog - topics that have been on my mind during the past days, weeks, and sometimes months: <a rel='noreferrer noopener' href="https://notyourtypicalasian.com" target="_blank"><strong>www.notyourtypicalasian.com</strong></a>. I started working on a newsletter sharing things I read, videos I watched and tools I find that I think would be interesting, useful or helpful to others: <a href="https://tinyletter.substack.com/" target='_blank' rel='noreferrer noopener'><strong>Tiny Letter</strong></a></p>
        </div>
        <div className="now_section">
            <p><em>Last updated July 10, 2023.</em></p>
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