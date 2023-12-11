import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handelClick = (path) => {
    navigate(path);
  };

  return (
    <div className="flex gap-4 mb-4 cursor-pointer bg-green-400 border border-black">
      <div
        className="border-r border-black  p-2"
        onClick={() => handelClick("/")}
      >
        Approach 1
      </div>
      <div
        className="border-r border-black  p-2"
        onClick={() => handelClick("prism")}
      >
        Approach 2
      </div>
      <div className="p-2" onClick={() => handelClick("/")}>
        Approach 3
      </div>
    </div>
  );
}
