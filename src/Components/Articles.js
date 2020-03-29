import React from 'react';
// import { Link } from 'react-router-dom';
// import Card from '../Containers/Card/Card'
import CardList from '../Containers/CardList';
import Banner from '../Containers/Banner';

const Articles = () => {
    return (
        <div className='Articles'>
            <Banner title='Articles'/>
            <CardList className='abc'/>
        </div>
    )
}

export default Articles;
