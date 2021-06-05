import React from 'react';

import classes from './Editor.module.scss';

export default function Editor(props) {
  return (
    <div>
      <h1 className={classes.Editor__heading}>💻 Editor ⬇💻</h1>
      <textarea
        className={classes.Editor}
        id='editor'
        onChange={props.onChange}
        value={props.value}
        type='text'
      ></textarea>
    </div>
  );
}
