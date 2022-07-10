import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let { description, title, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-3'>
        <div className="card">
         <span className='position-absolute top-0 badge bg-primary' style={{right:'0px',zIndex:'1'}}>{source}</span>

          <img className="card-img-top" src={imgUrl} alt="loading" />

          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {author?author:"Unknown"} On {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>

    )
  }
}

export default NewsItem