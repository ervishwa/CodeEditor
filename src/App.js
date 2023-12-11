import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { CodeEditor } from "./components/CodeEditor";
import CodeEditorSecond from "./components/CodeEditorSecond";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CodeEditor/>} />
          <Route path="prism" element={<CodeEditorSecond />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
