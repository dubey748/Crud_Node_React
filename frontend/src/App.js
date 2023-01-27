import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import PostApi from "./pages/PostApi";

import Test from "./pages/Test";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Test />}></Route>

            <Route path="/post" element={<PostApi />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
