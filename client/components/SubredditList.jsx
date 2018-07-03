import React from 'react'
import {connect} from 'react-redux'

import Post from './Post'

const Subreddit = ({subreddits}) => {
  console.log(subreddits);
  return (
  <div>
    {subreddits.map((post, i) =>
      <Post
        key={i}
        title={post.title} 
        date={post.created}
      />
    )}
  </div>
)}

const mapStateToProps = (state) => {
  return {
    subreddits: state.subreddits
  }
}

export default connect(
  mapStateToProps
)(Subreddit)
