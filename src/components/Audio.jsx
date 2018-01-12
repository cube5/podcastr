import React, { PureComponent } from 'react';

class Audio extends PureComponent {
  constructor({ src = null, type = 'audio/mpeg' }) {
    super();

    this.audio = null;
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
