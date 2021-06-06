import React from 'react';
import classes from './Preview.module.scss';
import marked from 'marked';

marked.setOptions({
  breaks: true,
});

export default function Preview(props) {
  const collectMarkdown = () => {
    return { __html: marked(props.value) };
  };

  return (
    <div className={classes.Preview}>
      <h1 className={classes.Preview__heading}> 📺 Preview ⬇ 📺</h1>
      <div id='preview' dangerouslySetInnerHTML={collectMarkdown()}></div>
    </div>
  );
}
