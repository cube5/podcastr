import React, {Component} from 'react';

import FeedDetail from './FeedDetail';

class Feed extends Component {
  render() {
    let rss = this.props.rss;
    let feed = rss.feed;
    if(rss.items.length < 1) return <EmptyFeed/>
    let items = rss.items.map((item, index) => {
      return (
        <div key={index}>    
          <FeedDetail item={item}/>
        </div>
      );
    });
    return (
      <div className="feed">
        <img src={feed.image} className="feed-logo"/>
        <h3>{feed.title}</h3>
        <div><b>Link:</b> <a href="{feed.link}">{feed.link}</a></div>
        <div><b>Autor:</b> {feed.author}</div>
        <div><b>Descripción:</b> {feed.description}</div>
        <div className="feed-items">
          {items}
        </div>
      </div>
    );
  }
}

const EmptyFeed = () => <p>Introduce una url válida para poder listar los episodios.</p>

Feed.propTypes = {
  rss: React.PropTypes.object
}

export default Feed;