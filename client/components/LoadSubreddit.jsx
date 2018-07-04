import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchPosts, redditSearch } from '../actions'

class LoadSubreddit extends Component {

  constructor(props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log(this.props)
  }

  handleChange(e) {
    this.props.dispatch(redditSearch(e.target.value))
  }

  render() {

    return (
      <React.Fragment>
        <input type="text" name="subreddit" onChange={this.handleChange} />

        <button onClick={() => this.props.dispatch(fetchPosts(this.props.redditSearch))}>
          Fetch Posts
        </button>
      </React.Fragment >
    )
  }
}

const MapStateToProps = state => state

export default connect(MapStateToProps)(LoadSubreddit)
