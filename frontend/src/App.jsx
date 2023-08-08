import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ConsumablesPage from "./pages/ConsumablesPage";
import CreationsPage from "./pages/CreationsPage";

import "./App.css";
import "./reset.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<ConsumablesPage />} />
          <Route path="/creations" element={<CreationsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
