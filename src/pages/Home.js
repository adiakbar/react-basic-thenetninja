import React, { Component } from 'react';

// import axios from 'axios';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import Pokeball from '../pokeball.png';

class Home extends Component {

  // state = {
  //   posts: []
  // }
  
  // componentDidMount() {
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //     .then(res => {
  //       this.setState({
  //         posts: res.data.slice(0,10)
  //       })
  //     })
  // }
  render() {
    const { posts } = this.props;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <img src={Pokeball} alt="A pokeball"/>
            <div className="card-content">
              <Link to={'/' + post.id}>
                <span className="card-title">{ post.title }</span>
              </Link>
              <p>{ post.body }</p>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">No Posts yet</div>
    )

    return (
      <div className="container home">
        <h4 className="center">Home Page</h4>
        <h5>Total Order: { this.props.order }</h5>
        { postList }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    order: state.totalOrder
  }
}

export default connect(mapStateToProps)(Home);