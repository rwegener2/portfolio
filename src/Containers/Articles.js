import React from 'react';
// import { Link } from 'react-router-dom';
// import Card from '../Containers/Card/Card'
import CardList from './CardList';
import Banner from './Banner';
import styled from 'styled-components';


const Div = styled.div`
  display: inline-block;

 }`

const Articles = () => {
    return (
        <div className='Articles'>
            <Banner title='Articles'/>
            <div className="container">
                <CardList className='abc'/>
            </div>
        </div>
    )
}

export default Articles;
