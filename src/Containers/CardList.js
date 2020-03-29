import React from 'react';
import Card from './Card/Card.js';
import styled from 'styled-components';

const Div = styled.div`
  display: inline-block;
  margin-top: 20px;
 }
`;

const CardList = () => {
    return <Div>
                <Card key='1'/>
                <Card key='2'/>
                <Card key='3'/>
        </Div>
            ;
    }

export default CardList;
