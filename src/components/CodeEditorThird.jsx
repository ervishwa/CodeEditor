import React, { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import TextArea from "./TextArea";

export function CodeEditorThird() {
  const [value, setValue] = useState("");

  return (
    <div className="w-[500px] overflow-scroll">
      <TextArea value={value} setValue={setValue} />
      <Highlight theme={themes.oneLight} code={value} language="javascript">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre style={style}>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
