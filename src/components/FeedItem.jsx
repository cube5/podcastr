import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Audio = props => (
  <audio preload="metadata" controls>
    <source src={props.src} type={props.type} />
    Your browser does not support the <code>audio</code> element.
  </audio>
);

const FeedItem = ({ item }) => (
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
      <Audio src={item.enclosure.link} type={item.enclosure.type} />
    </div>
    <hr />
  </div>
);

FeedItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedItem;
