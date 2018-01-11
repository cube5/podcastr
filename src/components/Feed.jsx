import React from 'react';
import PropTypes from 'prop-types';
import FeedItem from './FeedItem';

const Feed = ({ rss }) => {
  console.log(rss);

  if (!rss || rss.items.length < 1) {
    return null;
  }

  const feed = rss.feed;
  return (

    <div className="columns is-centered">
      <div className="column is-four-fifths is-narrow">
        <div className="content">
          <div style={{ textAlign: 'center' }}>
            <img src={feed.image} alt="Feed logo" style={{ width: 150 }} />
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
                  <FeedItem item={item} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

Feed.propTypes = {
  rss: PropTypes.object.isRequired,
};

export default Feed;
