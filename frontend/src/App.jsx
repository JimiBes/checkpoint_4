import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StonesPage from "./pages/StonesPage";
import CreationsPage from "./pages/CreationsPage";

import "./App.css";
import "./reset.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StonesPage />} />
          <Route path="/creations" element={<CreationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
