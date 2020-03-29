import React from 'react';
import Card from './Card/Card.js';

// Card list as a function represents a deterministic, static website: it takes inputs and creates and output in exactly the same way everytime under given inputs.  Because of this a basic function makes sense for CardList before the search box, but not after
//  --- The people call this "pure componets" (or also dumb components)
const CardList = () => {
    return (
            [<Card key='1'/>, <Card key='2'/>, <Card key='3'/>,]
            );
    }

export default CardList;
