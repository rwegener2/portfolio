import React from "react";
import styled from 'styled-components';
// import VectorContent from '../database/posts/vector_formats/vector_converting.js';
import GeojsonContent from '../database/posts/geojsons/geojsons.js';
import PostContent from '../database/earth_math/math.js';
import Banner from '../Containers/Banner';
import {
  useParams
} from "react-router-dom";

const Div = styled.div`
  padding: 25px;
  margin: auto;
  max-width: 725px;
 }
`;

function Post() {
    let { postId } = useParams();
    if (postId === 'geojsons') {
      return (
        <div>
        <Banner title = 'Representing Objects with GeoJSONs' />
        <Div>
          <GeojsonContent />
        </Div>
        </div>
      );
    }
    return <h3>Generic - Requested topic ID: {postId}</h3>;
  }

export default Post;
