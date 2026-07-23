// Output: Renders an individual post displaying its title as a heading and its body as a paragraph
import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

export default Post;
