import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import styled from 'styled-components';
import  { posts } from '../../database/post_index';

// https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/
const Div = styled.div`
  transition:all 0.3s ease;

  &:hover {
   box-shadow: inset 0 0 0 5px #5a464c;
   -webkit-transform: scale(1.1);
   -ms-transform: scale(1.1);
   transform: scale(1.1);
 }
`;

console.log(posts);

const Card = ({ postInfo }) => {
    return (
        <Div className="card">
            {/* <img src="..." class="card-img-top" alt="..."> */}
            <div className="card-body">
                <h5 className="card-title">{postInfo.title}</h5>
                <p className="card-text">{postInfo.description}</p>
                <Link className="btn btn-primary" to="/post">Read</Link>
            </div>
        </Div>
    );
}

export default Card;
