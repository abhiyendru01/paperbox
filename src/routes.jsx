// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home';
import Subject from './components/subject';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subject/:subjectCode" element={<Subject />} />
      </Routes>
    </Router>
  );
}

export default App;
