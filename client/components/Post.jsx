import React from 'react'
import moment from 'moment'

const Post = ({title, date, url, thumbnail}) => {
  
  let convertedDate = moment.unix(date).format('dddd h:mm')
  convertedDate += " | "+moment.unix(date).fromNow();
  return (
  <div>
  <a href={`http://www.reddit.com${url}`} ><h1>{title}</h1></a>
  <p>{convertedDate}</p>
  {thumbnail ? <img src={thumbnail}/> : null}
  <br/>
  </div>
)}

export default Post
