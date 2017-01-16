import React, {Component} from 'react';

import helpers from '../utils/helpers';

import Feed from './Feed';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      rss: {
        feed: {},
        items: []
      }
    }; // set initial state
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    this.setState({ url: e.target.value });    
  }
  
  handleSubmit(e) {
    e.preventDefault();
    console.log('handling submit event', this.state.url);
    helpers.getRSSFeed(this.state.url).then(resp => {
      console.log(resp);
      let data = resp.data;
      this.setState({
        url: this.state.url,
        rss: {
          feed: data.feed,
          items: data.items
        }
      });
    });
  }
  
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="feed-form">
          <input value={this.state.url} onChange={this.handleChange} type="text"
            placeholder="http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444)" />
          <input type="submit" value="Submit" />
        </form>
        <Feed rss={this.state.rss}/>
      </div>
    );
  }
}

export default Home;