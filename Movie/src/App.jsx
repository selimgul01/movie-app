import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import PageContainer from "./container/PageContainer";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import New from "./pages/New";
import UpComing from "./pages/UpComing";
import Favorite from "./pages/Favorite";
import { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <PageContainer>
      <Router>
        <Navbar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/new-movie" element={<New />} />
          <Route path="/up-coming" element={<UpComing />} />
          <Route path="/favorite-movie" element={<Favorite />} />
        </Routes>
      </Router>
    </PageContainer>
  );
}

export default App;
