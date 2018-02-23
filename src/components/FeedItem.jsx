import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const FeedItem = ({ item = null, play = null, isPlaying = false }) => (
  <Fragment>
    <h3>
      <a href={item.link}>{item.title}</a>
    </h3>
    <h4>{item.description}</h4>
    <div>{item.pubDate}</div>
    <div style={{ marginTop: '15px' }}>
      <button className="button is-info is-medium" onClick={e => play(item)}>
        <span className="icon">
          <i className={`fa fa-${isPlaying ? 'pause' : 'play'}`} />
        </span>
        <span>{isPlaying ? 'Pause' : 'Play'}</span>
      </button>
    </div>
    <hr />
  </Fragment>
)

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
  onEpisodePlay: PropTypes.func.isRequired
}

FeedItem.defaultProps = {
  item: {},
  onEpisodePlay: null
}

export default FeedItem
