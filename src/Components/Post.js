import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import PostContent from '../database/posts/geojsons/geojsons.md'
import Banner from '../Containers/Banner';

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
        <div>
            <ReactMarkdown source={this.state.content} />
        </div>
      </div>
    )
  }
}

export default Post;
