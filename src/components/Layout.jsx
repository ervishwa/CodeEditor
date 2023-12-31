import React from "react";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex flex-col justify-center items-center h-[100vh]">
      <div className="p-4 flex flex-col justify-center items-center h-full">
        <p className="font-semibold text-3xl mb-2 leading-loose">
          React-Simple-code-editor
        </p>
        <p className="mb-2 text-center w-3/4 font-normal">
          A simple no-frills code editor with syntax highlighting.
        </p>
        <Outlet />
      </div>
    </div>
  );
}
