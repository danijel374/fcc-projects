import classes from './DrumPad.module.scss';
import React from 'react';

export default function DrumPad({ id, keyTrigger, url, whatIsPlayingHandler }) {
  const onClickHandler = (e) => {
    const AUDIOELEMENT = document.getElementById(keyTrigger);
    AUDIOELEMENT.parentElement.classList.add('active');

    AUDIOELEMENT.currentTime = 0;
    AUDIOELEMENT.play();

    AUDIOELEMENT.addEventListener('ended', () => {
      AUDIOELEMENT.parentElement.classList.remove('active');
    });

    whatIsPlayingHandler(id);
  };

  return (
    <button
      onClick={onClickHandler}
      className={`drum-pad ${classes.DrumPad}`}
      id={id}
    >
      {keyTrigger}
      <audio src={url} className='clip' id={keyTrigger}></audio>
    </button>
  );
}
