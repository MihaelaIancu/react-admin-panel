import React from 'react';
import PostItem from './PostItem';

class PostList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(post => post.id < 4);
            this.setState({posts: filteredData});
        });
  }

  render() {
    const { posts } = this.state;
      return(
        <div>
            <h2>Lista postarilor:</h2>
            { posts.map((post, index) => {
                return <PostItem
                    title = { post.title } 
                    id = { post.id }
                    body = { post.body }
                    key = { index }
                />
            })}
        </div>
      );
  }
  
}

export default PostList;