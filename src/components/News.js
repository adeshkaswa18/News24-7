import React, { Component } from 'react'
import Loading from './Loading';
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {

  static defaultProps = {
    country: 'in',
    pageSize: 12,
    category: 'general',
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,

  }

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props){
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
   }
   document.title = `News24/7 - ${this.capitalizeFirstLetter(this.props.category)} `
  };

  async updateNews() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=fe2b574748bc405ba66b55197947fdf7&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        loading: false
    })
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  fetchMoreData = async () => {

    this.setState({page: this.state.page +1})
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&page=${this.state.page}&category=${this.props.category}&apiKey=fe2b574748bc405ba66b55197947fdf7&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,
    })
  }

  render() {
    return (
    <>
       <h1 className='text-center' style={{margin: '35px 0px'}}>News24/7 - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
       {this.state.loading && <Loading />}
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Loading />}
        >
        <div className='container'>

        
         <div className='row'>
           {!this.state.loading && this.state.articles.map((element) =>{
            return <div className='col-md-4' key={element.url}>
            <NewsItem title={element.title?element.title.slice(0, 44):""} description={element.description?element.description.slice(0, 88):""} imgURL={element.urlToImage} newsURL={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
           </div>
           })}
          </div>
        </div> 
        </InfiniteScroll>
    </>
    )
  }
}
