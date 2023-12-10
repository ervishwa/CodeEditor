import React, { useState } from "react";

export default function TextArea() {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleTextareaResize = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <div className="w-[80%] mt-12">
      <textarea
        className="w-full bg-stone-100 resize-none border-none outline-none p-2 text-xs"
        id="comment"
        required
        rows={4}
        value={value}
        onChange={handleInputChange}
        onInput={handleTextareaResize}
      />
    </div>
  );
}
