import React from 'react';
// import { Link } from 'react-router-dom';
import Banner from './Banner';

const About = () => {
    return (
        <div className='About'>
            <Banner title='About'/>
            <div className='text-block'>
                <p>My name is Rachel.  I like a lot of things but two of those things, as life would have it, are science and code.</p>
                <p>As I started working more with code I felt like the number of resources available to you the more specialized you get diminishes.  Climbing that learning curve of figuring out how to do things when there is no one on Stackoverflow with my exact question took some adjusting, so I'm hoping some of the content here can help ease that transition for other folks.</p>
                <p>If you'd like to reach out drop me a line.  I'm semi-consistently present on the twitterverse. <a href='https://twitter.com/rwegener2'>@rwegener2</a></p>
            </div>
        </div>
    )
}

export default About;
