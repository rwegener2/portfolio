import React from 'react';
// import { Link } from 'react-router-dom';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='Home'>
            <Banner title='Home'/>
            <div className='text-block'>
                <p>Welcome to this blog!  I'm putting information here, of a class and type not yet fully determined.</p>
                <p>So check out the articles!  I hope the content can be useful.</p>
            </div>
        </div>
    )
}

export default Home;
