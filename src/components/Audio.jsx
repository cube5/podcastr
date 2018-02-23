import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Audio extends PureComponent {
  audio = null;

  static propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }

  static defaultProps = {
    src: '',
    type: '',
  }

  componentDidMount() {
    this.audio.onplay = () => {
      console.log('[Audio]: audio playing event');
      this.props.onPlay();
    }
  }

  componentDidUpdate() {
    this.audio.load();
  }

  render() {
    const { src, type } = this.props;
    return (
      <audio preload="auto" controls autoPlay ref={audio => this.audio = audio}>
        <source src={src} type={type} />
        Your browser does not support the <code>audio</code> element.
      </audio>
    );
  }
}

export default Audio;
