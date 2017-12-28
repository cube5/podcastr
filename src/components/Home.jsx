import React, { Component } from 'react';
import {getRSSFeed} from '../utils/helpers';
import Feed from './Feed';

class Home extends Component {
  constructor(props) {
    super(props);

    this.input = null;
    this.defaultUrl = "http://www.los40.com.mx/plantilla/xmlitunes.aspx?id=4444";

    this.state = {
      url: this.defaultUrl,
      rss: {
        feed: {},
        items: [],
      },
    };
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handling submit event', this.input.value);

    const result = await getRSSFeed(this.input.value);
    console.log(result);
    const { feed, items } = result;
    this.setState({
      url: this.state.url,
      rss: {
        feed,
        items
      },
    });
  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit} className="feed-form">
          <input
            type="text"
            defaultValue={this.defaultUrl}
            placeholder={this.defaultUrl}
            ref={(input) => this.input = input}
          />
          <input type="submit" value="Submit" />
        </form>
        <Feed rss={this.state.rss} />
      </div>
    );
  }
}

export default Home;
