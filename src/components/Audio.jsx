import React, { PureComponent } from "react";
import PropTypes from "prop-types";

class Audio extends PureComponent {
  player = null;

  static propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  };

  static defaultProps = {
    src: "",
    type: ""
  };

  componentDidUpdate() {
    this.player.load();
  }

  render() {
    const { src, type } = this.props;
    return (
      <audio
        autoPlay
        controls
        preload="auto"
        ref={audio => (this.player = audio)}
      >
        <source src={src} type={type} />
        Your browser does not support the <code>audio</code> element.
      </audio>
    );
  }
}

export default Audio;
