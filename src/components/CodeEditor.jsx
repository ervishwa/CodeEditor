import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

export function CodeEditor() {
  const [value, setValue] = React.useState("");
  const onChange = React.useCallback((val, viewUpdate) => {
    setValue(val);
  }, []);
  return <CodeMirror style={{width:"500px"}} value={value} minHeight="200px" extensions={[javascript({ jsx: true })]} onChange={onChange} options={{ lineNumbers: false }}/>;
}
