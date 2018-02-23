import React, { Component } from "react";

import { getRSSFeed } from "../requests";
// import Podcasts from './Podcasts';
import SearchBar from "./SearchBar";
import Feed from "./Feed";

class Content extends Component {
  state = {
    isFetching: false,
    rss: {
      feed: null,
      items: []
    }
  };

  handleSubmit = async (e, value) => {
    e.preventDefault();
    console.log("handling submit event", value);

    this.setState({
      isFetching: true
    });

    const result = await getRSSFeed(value);

    const { feed, items } = result;
    this.setState({
      isFetching: false,
      rss: {
        feed,
        items
      }
    });
  };

  render() {
    const { isFetching } = this.state;
    return (
      <section className="section" style={{ minHeight: "11.2rem" }}>
        <div className="container">
          <SearchBar onSubmit={this.handleSubmit} isFetching={isFetching} />
          <Feed rss={this.state.rss} />
        </div>
      </section>
    );
  }
}

export default Content;
