export default function TextArea({ value, setValue }) {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleTextareaResize = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <div className="w-full mt-12">
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
