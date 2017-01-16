import React, {Component} from 'react';

class FeedDetail extends Component {
  render() {
    let item = this.props.item;
    return (
      <div className="feed-item">
        <h4>{item.title}</h4>
        <div><b>Fecha:</b> {item.pubDate}</div>
        <div><b>Link:</b> <a href={item.link}>{item.link}</a></div>
        <div><b>Descripción:</b> {item.description}</div>
        <div>
          <Audio src={item.enclosure.link} type={item.enclosure.type}/>
        </div>
        <hr/>
      </div>
    );
  }
}

const Audio = (props) => (
  <audio preload="auto" controls>
    <source src={props.src} type={props.type}></source>
    Your browser does not support the <code>audio</code> element.
  </audio>
);

FeedDetail.propTypes = {
  item: React.PropTypes.object
}

export default FeedDetail;