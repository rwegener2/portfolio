import React from 'react';
// import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='Home'>
            <Banner title='Home'/>
            <div className='about-text'>
                It would be fabuluous to think of what kind of content to go here.
            </div>
        </div>
    )
}

export default Home;
