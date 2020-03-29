import React from 'react';
import styled from 'styled-components';


// https://www.webdesignerdepot.com/2014/05/8-simple-css3-transitions-that-will-wow-your-users/
const Div = styled.div`
  background-color: #53131E;
  padding: 80px;
  text-align: center;
  color: white;
  border-bottom: 8px solid #5a464c;
  border-top: 8px solid #5a464c;
 }
`;


const Banner = ({ title }) => {
    return (
        <Div>
            <h2>{title}</h2>
        </Div>
    );
}

export default Banner;
