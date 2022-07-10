import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'



export class News extends Component {

  constructor(props){
    super(props);
    this.state = {
      articles:[],
      loading:false,
      page:0,
    }
    document.title = `${this.capitalized(this.props.category)} - NewsJunction`;
  }
  
async componentDidMount(){
  let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.api}&page=1&pageSize=${this.props.pageSize}`;
  this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json()
  this.setState({
    page:1,
    loading:false,
    articles: parsedData.articles,
    totalResults: parsedData.totalResults})
}

nextClick = async ()=>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      loading:false,
      page:this.state.page+1,
      articles: parsedData.articles
     }) 
    
    
}

prevClick = async ()=>{
   
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=${this.props.api}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json()
    this.setState({
      loading:false,
      page:this.state.page-1,
      articles: parsedData.articles})
  
}

capitalized = (text)=>{
return text.charAt(0).toUpperCase() + text.slice(1);
}

  render() {
    return (
     <div className='container my-3'>
        <h2 className='text-center' style={{margin:'35px 0px'}}>Top {this.capitalized(this.props.category)} News Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className='row'>
          {!this.state.loading && this.state.articles.map((element)=>{
            return(
              <div className='col-md-4 '>
              <NewsItem title={element.title} description={element.description} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author} source={element.source.name} date={element.publishedAt}/>
              </div>   
            )
          })}         
        </div>
        <div className='container d-flex justify-content-between'>
        <button type='button' disabled={this.state.page<=1} className='btn btn-dark' onClick={this.prevClick}>&larr;Previous</button>
          <button type='button' disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} className='btn btn-dark' onClick={this.nextClick}>Next&rarr;</button>
        </div>
     </div>
    )
  }
}

export default News