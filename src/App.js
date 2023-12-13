import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { CodeEditorThird } from "./components/CodeEditorThird";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CodeEditorThird />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
