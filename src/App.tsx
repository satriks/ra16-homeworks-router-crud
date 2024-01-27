import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import NewPost from "./pages/NewPost";
import PostDetail from "./pages/PostDetail";
import PostRedact from "./pages/PostRedact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/redact" element={<PostRedact />} />
      </Routes>
    </BrowserRouter>
  );
}
