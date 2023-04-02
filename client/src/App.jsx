import React from "react";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import {Home, CreatePost} from "./Pages";

function App() {
  return (
      <BrowserRouter>
      <header className="header_conteiner">
      <Link to='/'>Home</Link>
      <Link to='/create-post'>Create post</Link>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/create-post" element={<CreatePost/>} />
        </Routes>
      </main>
      </BrowserRouter>
  );
}

export default App;
