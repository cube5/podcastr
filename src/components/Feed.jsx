import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';
import Audio from './Audio';

class Feed extends Component {
  state = {
    src: '',
    type: '',
    title: '',
    playing: false,
  }

  play = item => {
    const { link: src, type: type } = item.enclosure;
    this.setState({ src, type });
  };

  pause = () => {
    this.setState({ src: null });
  }

  onPlay = () => {
    this.setState({
      playing: true,
    })
  }

  render() {

    const { rss } = this.props;
    if (!rss || rss && !Array.isArray(rss.items)) {
      return null;
    }

    const { feed } = rss;

    return (
      <div className="columns is-centered">
        <div className="column is-four-fifths is-narrow">
          <div className="content">
            <div style={{ textAlign: 'center' }}>
              <img src={feed.image} alt="Feed logo" style={{ width: 150 }} />
              <div style={{ marginTop: 10 }}>
                <Audio
                  src={this.state.src}
                  type={this.state.type}
                  onPlay={this.onPlay}
                  pause={this.pause}
                />
              </div>
              <h2>
                <a href={feed.link}>{feed.title}</a>
              </h2>
              <div style={{ textAlign: 'left' }}>
                <div>
                  <b>Autor:</b> {feed.author}
                </div>
                <div style={{ marginBottom: 20 }}> {feed.description} </div>
              </div>
            </div>
            <div className="box">
              {
                rss.items.map((item, index) => (
                  <FeedItem
                    key={index}
                    item={item}
                    play={this.play}
                    pause={this.pause}
                    playing={this.state.playing}
                  />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Feed.propTypes = {
  rss: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.object)
  }).isRequired,
};

Feed.defaultProps = {
  rss: null,
}

export default Feed;
