import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import PostContent from '../database/posts/geojsons/geojsons.md'
import Banner from '../Containers/Banner';
import styled from 'styled-components';

const Div = styled.div`
  padding: 25px;
  margin: auto;
  max-width: 725px;
 }
`;

class Post extends Component {
  constructor(props) {
    super(props)

    this.state = { terms: null }
  }

  componentWillMount() {
    fetch(PostContent).then((response) => response.text()).then((text) => {
      this.setState({ content: text })
    })
  }

  render() {
    return (
      <div className="Post">
        <Banner title='Post'/>
        <Div>
            <ReactMarkdown source={this.state.content} />
        </Div>
      </div>
    )
  }
}

export default Post;
