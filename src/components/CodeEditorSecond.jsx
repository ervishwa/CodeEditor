import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-coy.css";
import TextArea from "./TextArea";

function Editor() {
  const [code, setCode] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <div className="editor-container w-[400px]">
      <TextArea value={code} setValue={setCode} />
      <pre
        id="editor-pre"
        className={`editor language-javascript line-numbers`}
      >
        <code id="editor-code">{code}</code>
      </pre>
    </div>
  );
}

export function CodeEditorSecond() {
  return (
    <div>
      <Editor />
    </div>
  );
}
