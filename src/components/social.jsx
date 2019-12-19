import React from 'react';
import '../App.scss';
import { Link } from "react-router-dom";
import Resume from '../assets/RichardChanResume2020.pdf'

const Social = () => (
    <div className="social">
        <div className="social_items">
            <ul>
                <li>
                    <Link to="/now">now</Link>
                </li>
                <li>
                    <a href="mailto:richardchanme@gmail.com">contact</a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/rchrdchn" rel="noopener noreferrer" target="_blank">linkedin</a>
                </li>
                <li>
                    <a href="https://github.com/rchrdchn" rel="noopener noreferrer" target="_blank">github</a>
                </li>
                <li>
                    <a href={Resume} rel="noopener noreferrer" target="_blank">resume</a>
                </li>
            </ul>
        </div>
    </div>
)

export default Social;