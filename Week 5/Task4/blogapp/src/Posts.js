// Output: Fetches a list of posts from an API, saves them to state, and maps over them to render a list of Post components (with error handling)
import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ posts: data }))
      .catch(error => this.setState({ error: error.message }));
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    alert("Error: " + error.message);
  }

  render() {
    if (this.state.error) {
      return <div>Error: {this.state.error}</div>;
    }
    return (
      <div>
        {this.state.posts.map(post => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}

export default Posts;
