import React from 'react'

function PostItem(props) {
    const {title, id, body} = props;
  return (
    <div>
        <h2>{ title }</h2>
        <p>{ id }. { body }</p>
    </div>
  )
}

export default PostItem;