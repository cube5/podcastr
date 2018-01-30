import React from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'react-powerplug';

const FeedItem = ({ item = null, onEpisodePlay = null}) => (
  <div>
    <h3><a href={item.link}>{item.title}</a></h3>
    <h4>{item.description}</h4>
    <div>{item.pubDate}</div>
    <div style={{ marginTop: '15px' }}>
      <Toggle initial={false}>
        {({ on, toggle }) => (
          <button
            className="button is-info is-medium"
            onClick={e => {
              toggle();
              onEpisodePlay(e, item);
            }}
          >
            <span className="icon">
              <i className={`fa fa-${on ? 'pause' : 'play'}`}></i>
            </span>
            <span>{on ? 'Pause' : 'Play'}</span>
          </button>
        )}
      </Toggle>
    </div>
    <hr />
  </div>
);

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEpisodePlay: PropTypes.func.isRequired
};

FeedItem.defaultProps = {
  item: {},
  onEpisodePlay: null
};

export default FeedItem;
