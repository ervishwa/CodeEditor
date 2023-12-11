import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const codeEditors = [
  {
    id: 1,
    editorName: "CodeEditor 1",
    path: "/",
  },
  {
    id: 2,
    editorName: "CodeEditor 2",
    path: "prism",
  },
  {
    id: 3,
    editorName: "CodeEditor 3",
    path: "prismreactrender",
  },
];

export default function Navbar() {
  const [activeEditorId, setActiveEditorId] = useState(1);
  const navigate = useNavigate();

  const handelClick = (path, id) => {
    setActiveEditorId(id);
    navigate(path);
  };

  return (
    <div className="flex mb-4 cursor-pointer bg-slate-200 border border-black">
      {codeEditors.map((currentEditor) => {
        return (
          <div
            className={` ${
              currentEditor.id === activeEditorId ? "bg-slate-400" : ""
            } ${currentEditor.id !== 3 && "border-r"}  border-black  p-2`}
            onClick={() => handelClick(currentEditor.path, currentEditor.id)}
          >
            {currentEditor.editorName}
          </div>
        );
      })}
    </div>
  );
}
