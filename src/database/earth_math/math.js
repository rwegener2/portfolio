import React from 'react';
import AsciiFormula from '../../Containers/Formula';


function MathPost() {
    return (
        <div>
            <p>I'm a path post</p>
            <AsciiFormula ascii='U = 1/(R_(si) + sum_(i=1)^n(s_n/lambda_n) + R_(se))'/>
        </div>
    );
}

export default MathPost;
