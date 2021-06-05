import { Fragment, useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

const placeholder = `# Welcome to my React Markdown Previewer!

## Have fun! (´・ω・｀)
### Feel free to play with markdown! ╰(*°▽°*)╯
  
This is a \`<div></div>\`, a simple code.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine ==  '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [My Personal Page](https://danijelprskalo.netlify.app/), and
> Block Quotes!

Column1 | Column2 | Column3
------------ | ------------- | -------------
This is | my | content.... 
WOW! | YEAH! | WHOAAAAAAAAA!!!

* And last but not least, let's not forget embedded images: 

![Doge Meme w/ Text](https://s15.postimg.cc/oxmaj55bv/doge_1_62160_8778_image_13223.gif)
`;

function App() {
  const [editorState, setEditorState] = useState(placeholder);

  const onInputChangeHandler = (e) => {
    setEditorState(e.target.value);
  };

  return (
    <Fragment>
      <Editor value={editorState} onChange={onInputChangeHandler} />
      <Preview value={editorState} />
    </Fragment>
  );
}

export default App;
