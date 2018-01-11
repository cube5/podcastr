import React from 'react';

const Audio = ({ src, type }) => (
  <audio preload="metadata" controls>
    <source src={src} type={type} />
    Your browser does not support the <code>audio</code> element.
  </audio>
);

export default Audio;
