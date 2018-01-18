import React from 'react';
import PropTypes from 'prop-types';

const FeedItem = ({ item = null, onEpisodePlay = null }) => (
  <div className="feed-item">
    <h4>{item.title}</h4>
    <div>
      <b>Fecha:</b> {item.pubDate}
    </div>
    <div>
      <b>Link:</b> <a href={item.link}>{item.link}</a>
    </div>
    <div>
      <b>Descripción:</b> {item.description}
    </div>
    <div>
      <button class="button is-info is-medium" onClick={e => onEpisodePlay(e, item)}>
        <span class="icon">
          <i class="fa fa-play"></i>
        </span>
        <span>Play</span>
      </button>
    </div>
    <hr />
  </div>
);

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedItem;
