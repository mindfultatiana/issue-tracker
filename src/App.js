// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import IssueList from './components/IssueList';
import IssueDetail from './components/IssueDetail';
import IssueForm from './components/IssueForm';
import { loadIssues, saveIssues } from './utils/localStorage';
import './App.css';

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    setIssues(loadIssues());
  }, []);

  const addIssue = (newIssue) => {
    const issue = {
      ...newIssue,
      id: Date.now(),
      opened_on: new Date().toISOString(),
      modified_on: new Date().toISOString()
    };
    const updatedIssues = [...issues, issue];
    setIssues(updatedIssues);
    saveIssues(updatedIssues);
  };

  const updateIssue = (id, updatedData) => {
    const updatedIssues = issues.map(issue => 
      issue.id === id 
        ? { ...issue, ...updatedData, modified_on: new Date().toISOString() }
        : issue
    );
    setIssues(updatedIssues);
    saveIssues(updatedIssues);
  };

  return (
    <Router basename="/issue-tracker">
      <Layout>
        <Routes>
          <Route path="/" element={<IssueList issues={issues} />} />
          <Route path="/issue/:id" element={<IssueDetail issues={issues} updateIssue={updateIssue} />} />
          <Route path="/new" element={<IssueForm onSubmit={addIssue} />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;