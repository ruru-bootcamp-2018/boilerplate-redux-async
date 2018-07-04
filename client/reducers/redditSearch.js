function redditSearch (state = '', action) {
  switch (action.type) {
    case 'SEARCH_SUBREDDIT':
      return action.subreddit
    default:
      return state
  }
}

export default redditSearch