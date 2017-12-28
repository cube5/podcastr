import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeedItem from './FeedItem';

const EmptyFeed = () => (
  <p>Introduce una url válida para poder listar los episodios.</p>
);

const Feed = ({ rss }) => {
  console.log(rss);

  if (!rss || rss.items.length < 1) {
    return <EmptyFeed />;
  }

  const feed = rss.feed;
  return (
    <div className="feed">
      <img src={feed.image} className="feed-logo" />
      <h3>{feed.title}</h3>
      <div>
        <b>Link:</b> <a href={feed.link}>{feed.link}</a>
      </div>
      <div>
        <b>Autor:</b> {feed.author}
      </div>
      <div>
        <b>Descripción:</b> {feed.description}
      </div>
      <div className="feed-items">
        {
          rss.items.map((item, index) => (
            <div key={index}>
              <FeedItem item={item} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

Feed.propTypes = {
  rss: PropTypes.object.isRequired,
};

export default Feed;
