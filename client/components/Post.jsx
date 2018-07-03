import React from 'react'
import moment from 'moment'

const Post = ({title, date}) => {
  
  let convertedDate = moment.unix(date).format('dddd h:mm')
  convertedDate += " | "+moment.unix(date).fromNow();
  return (
  <div>
  <h1>{title}</h1>
  <p>{convertedDate}</p>
  <br/>
  </div>
)}

export default Post
