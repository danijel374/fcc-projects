import React from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './Preview.module.scss';

export default function Preview(props) {
  return (
    <div className={classes.Preview}>
      <h1 className={classes.Preview__heading}> 📺 Preview ⬇ 📺</h1>
      <div id='preview'>
        <ReactMarkdown children={props.value} />
      </div>
    </div>
  );
}
