import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { CodeEditor } from "./components/CodeEditor";
import {CodeEditorSecond} from "./components/CodeEditorSecond";
import { CodeEditorThird } from "./components/CodeEditorThird";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CodeEditor/>} />
          <Route path="prism" element={<CodeEditorSecond />} />
          <Route path="prismreactrender" element={<CodeEditorThird />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
