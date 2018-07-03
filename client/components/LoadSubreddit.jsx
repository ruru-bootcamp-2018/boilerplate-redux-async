import React from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions'

const LoadSubreddit = ({ dispatch }) => {

  console.log(dispatch)

  function handleChange(e) {
    //console.log(e.target.value)
    let somevariable = e.target.value;
  }

  return (
    <React.Fragment>
      <input type="text" name="subreddit" onChange={handleChange} />

      <button onClick={() => dispatch(fetchPosts(somevariable))}>
        Fetch Posts
      </button>
    </React.Fragment>
  )
}

export default connect()(LoadSubreddit)
