import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

export function CodeEditorThird() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    const { value } = e.currentTarget;
    setValue(value);
  };

  const handelKeyDown = (e) => {
    if (e.key === "Enter") {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="w-[500px] relative bg-slate-100">
      <Highlight theme={themes.oneLight} code={value} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={{ style, ...styles.editor, ...styles.highlight }}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                <span className="text-sm">{i + 1}</span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
      <textarea
        className={`${count >= 10 ? "pl-4" : "pl-2"} ml-2 outline-none`}
        value={value}
        onChange={handleChange}
        onKeyDown={handelKeyDown}
        style={{
          ...styles.editor,
          ...styles.textarea,
        }}
      />
    </div>
  );
}

const styles = {
  textarea: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    resize: "none",
    color: "inherit",
    overflow: "scroll",
    MozOsxFontSmoothing: "grayscale",
    WebkitFontSmoothing: "antialiased",
    WebkitTextFillColor: "transparent",
  },
  highlight: {
    position: "relative",
    pointerEvents: "none",
  },
  editor: {
    margin: 0,
    border: 0,
    background: "none",
    boxSizing: "inherit",
    display: "inherit",
    fontFamily: "inherit",
    fontSize: "inherit",
    fontStyle: "inherit",
    fontVariantLigatures: "inherit",
    fontWeight: "inherit",
    letterSpacing: "inherit",
    lineHeight: "inherit",
    tabSize: "inherit",
    textIndent: "inherit",
    textRendering: "inherit",
    textTransform: "inherit",
    whiteSpace: "pre-wrap",
    wordBreak: "keep-all",
    overflowWrap: "break-word",
  },
};
