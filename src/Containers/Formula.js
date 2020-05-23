import React from "react";
import MathJax from 'react-mathjax2'

function AsciiFormula( {ascii} ) {
    return (
        <div>
            <MathJax.Context input='ascii'>
                <div>
                    <MathJax.Node inline>{ ascii }</MathJax.Node>
                </div>
            </MathJax.Context>
        </div>
    );
  }

export default AsciiFormula;
