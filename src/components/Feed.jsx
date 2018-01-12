import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedItem from './FeedItem';
import Audio from './Audio';

class Feed extends Component {

  state = {
    audioSrc: null,
    audioType: null,
  }

  handleEpisodePlay = (e, item) => {
    const { link: audioSrc, type: audioType } = item.enclosure;
    this.setState({
      audioSrc,
      audioType,
    })
  };

  render() {

    const { rss } = this.props;
    if (!rss || rss.items.length < 1) {
      return null;
    }

    const { feed } = rss;
    const { audioSrc, audioType } = this.state;

    return (
      <div className="columns is-centered">
        <div className="column is-four-fifths is-narrow">
          <div className="content">
            <div style={{ textAlign: 'center' }}>
              <img src={feed.image} alt="Feed logo" style={{ width: 150 }} />
              <div style={{ marginTop: 10 }}>
                <Audio src={audioSrc} type={audioType} />
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
                  <div key={index}>
                    <FeedItem item={item} onEpisodePlay={this.handleEpisodePlay} />
                  </div>
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
  rss: PropTypes.object.isRequired,
};

Feed.defaultProps = {
  rss: {}
}

export default Feed;
