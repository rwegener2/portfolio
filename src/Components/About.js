import React from 'react';
// import { Link } from 'react-router-dom';
import Banner from '../Containers/Banner';

const About = () => {
    return (
        <div className='About'>
            <Banner title='About'/>
            <div className='about-text'>
                Here is a little paragraph about moi and about this blog.  I need it to be longer, so that I can test margins so I am adding more to this beautiful self-bio.  Enjoy!
            </div>
        </div>
    )
}

export default About;
