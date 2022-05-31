import React from 'react';
import PostItem from './PostItem';
import './PostList.css'
// import FlipMove from "react-flip-move";

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
    const { stareButon } = this.props;
      return(
        <div>
            <h2 id="header-post">Lista postarilor:</h2>
            <div className='post-list'>
            { stareButon === 'postari' && posts.map((post, index) => {
                return (<PostItem
                    title = { post.title } 
                    id = { post.id }
                    body = { post.body }
                    key = { index }
                />
                );
            })}
            </div>
        </div>
      );
  }
  
}

export default PostList;