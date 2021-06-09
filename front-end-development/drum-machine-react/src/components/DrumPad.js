import React from 'react';

export default function DrumPad({ id, keyTrigger, url, whatIsPlayingHandler }) {
  const onClickHandler = (e) => {
    const AUDIOELEMENT = document.getElementById(keyTrigger);
    AUDIOELEMENT.play();
    whatIsPlayingHandler(keyTrigger);
  };

  return (
    <button onClick={onClickHandler} className='drum-pad' id={id}>
      {keyTrigger}
      <audio src={url} className='clip' id={keyTrigger}></audio>
    </button>
  );
}
