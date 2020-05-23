import React from 'react';
import Card from './Card.js';
import styled from 'styled-components';
import  { posts } from '../database/post_index';

const Div = styled.div`
  display: inline-block;
  margin-top: 20px;
 }
`;

const CardList = () => {
    const cardsArray = posts.map((post, i) => {
        return (<Card key={i} postInfo={posts[i]} />);
    });
    return (<Div>
                {cardsArray}
        </Div>);
    }

export default CardList;
