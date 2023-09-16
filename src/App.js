// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import BrowseProjects from './BrowseProjects';
import ResearchPapers from './ResearchPapers';
import EventCalendar from './EventCalendar';
import Dashboard from './Dashboard';
import Dashboard_Ins from './Dashboard_ins';
// import Chat from './Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/browseprojects" element={<BrowseProjects />} />
        <Route path="/researchpapers" element={<ResearchPapers />} />
        <Route path="/eventcalendar" element={<EventCalendar />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard_ins" element={<Dashboard_Ins />} />
        {/* <Route path="/chat" element={<Chat />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
