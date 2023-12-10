import React from "react";
// import TextArea from "./TextArea";
import { CodeEditor } from "./CodeEditor";

export default function Home() {
  return (
    <div className="p-4 flex flex-col justify-center items-center">
      <p className="font-semibold text-3xl mb-2 leading-loose">
        React-Simple-code-editor
      </p>
      <p className="mb-2 text-center w-3/4 font-normal">
        A simple no-frills code editor with syntax highlighting.
      </p>
      <CodeEditor />
    </div>
  );
}
