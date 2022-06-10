import React, { Component } from 'react'
import images from './images.jpg'
export class NewsItem extends Component {
  render() {
    let {title,description ,imgURL, newsURL, author, date, source } = this.props;
    return (
      <div className='my-2'>
          <div className="card">
          <img src={!imgURL ? images : imgURL} className="card-img-top" alt="..." />
             <div className="card-body">
               <h5 className="card-title">{title}.. <span className="badge bg-success">{source}</span> </h5>
               <p className="card-text">{description}...</p>
               <p className='card-text'><small className='text-muted'>By {!author? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
               <a href={newsURL} target="_blank" className="btn btn-sm btn-primary">Read More</a>
             </div>
          </div>
      </div>
    )
  }
}

export default NewsItem
