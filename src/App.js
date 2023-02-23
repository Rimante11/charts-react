import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/Home";
import Charts from "./pages/Charts";
import Contact from "./pages/Contact";
import TestPage from "./pages/Testpage";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Header />
        </nav>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/charts" element={<Charts />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/testpage" element={<TestPage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
