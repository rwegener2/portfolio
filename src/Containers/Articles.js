import React from 'react';
import CardList from './CardList';
import Banner from './Banner';


const Articles = () => {
    return (
        <div className='Articles'>
            <Banner title='Articles'/>

            <div className="container">
                <CardList className='abc'/>
            </div>

        </div>
    );
}

export default Articles;
