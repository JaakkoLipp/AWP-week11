import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyContainer from "./components/MyContainer";
import About from "./components/About";
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header className="App-header" />
        <Routes>
          <Route exact path="/" element={<MyContainer />} />
          <Route exact path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
