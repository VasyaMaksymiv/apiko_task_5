import React, { Component } from 'react';
import FormSearch from './Components/FormSearch/FormSearch'
import MoreButton from './Components/MoreButton/MoreButton'
import PostList from './Components/PostList/PostList'
import './App.css'

const API = "https://jsonplaceholder.typicode.com";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      countAllPosts: 0,
      countPostShow: 0,
      postsShowed: [],
      filterPosts: [],
      fetchedPost: [],
      searchTitle: '',
      btnHidden: false,
      loader: true,
    }
  }

  componentDidMount() {
    setTimeout(() => {
        fetch(`${API}/posts`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    postsShowed: data.slice(0, 10),
                    filterPosts: data,
                    countAllPosts: data.length,
                    loader: false
                })
            })
    }, 2000);

    setInterval(() => {
        fetch(`${API}/posts`)
            .then(response => response.json())
            .then(
            (posts) => {
                this.setState({
                    fetchedPost: posts
                });
            }
        );
    }, 3000);
}

  handleClick = (event) => {
    event.preventDefault();
    if(this.state.countPostShow < this.state.countAllPosts) {
        const postShowed = this.state.filterPosts.slice(0, this.state.countPostShow + 10);
        this.setState({
            countPostShow: postShowed.length,
            postsShowed: postShowed
        })
    } else {
        this.setState({
            btnHidden: true
        })
    }
  };

  handleChange = (event) => {
    event.preventDefault();
    const filterPosts = this.state.fetchedPost.filter((post) => {
            if(post.title.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1)
                return post;
        }
    );
    const countPostsShow = filterPosts.length > 10 ? 10 : filterPosts.length;
    const postsShow = filterPosts.slice(0, countPostsShow);

    this.setState({
        search: event.target.value,
        postsShowed: postsShow,
        countAllPosts: filterPosts.length,
        btnHidden: countPostsShow === filterPosts.length,
    })
  };

  render() {
    return (
      <div className="App">
        <FormSearch value={this.state.search} onChange={this.handleChange} />
        <PostList postShow={this.state.postsShowed} loading={this.state.loading} />
        <MoreButton onClick={this.handleClick} hidden={this.state.btnHidden} />
      </div>
    );
  }
}

export default App;
