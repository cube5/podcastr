import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import { Toggle } from 'react-powerplug';

const FeedItem = ({ item = null, play = null, playing = false}) => (
  <Fragment>
    <h3><a href={item.link}>{item.title}</a></h3>
    <h4>{item.description}</h4>
    <div>{item.pubDate}</div>
    <div style={{ marginTop: '15px' }}>
      <Toggle initial={true}>
        {({ on, toggle }) => (
          <button
            className="button is-info is-medium"
            onClick={e => {
              toggle();
              play(item);
            }}
          >
            <span className="icon">
              <i className={`fa fa-${on ? 'play' : 'pause'}`}></i>
            </span>
            <span>{on ? 'Play' : 'Pause'}</span>
          </button>
        )}
      </Toggle>
    </div>
    <hr />
  </Fragment>
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
