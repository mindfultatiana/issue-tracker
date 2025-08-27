// src/components/IssueForm.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const IssueForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    owner: '',
    status: 'new',
    summary: ''
  });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.summary.trim()) return;
    
    onSubmit(formData);
    navigate('/');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <h2>Create New Issue</h2>
      <form onSubmit={handleSubmit} className="issue-form">
        <div className="form-group">
          <label htmlFor="owner">Owner:</label>
          <input
            type="text"
            id="owner"
            name="owner"
            value={formData.owner}
            onChange={handleChange}
            placeholder="Enter owner name"
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status:</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
          >
            <option value="new">New</option>
            <option value="accepted">Accepted</option>
            <option value="reviewed">Reviewed</option>
            <option value="started">Started</option>
            <option value="closed">Closed</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="summary">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
            placeholder="Enter issue summary"
            rows="5"
            required
          />
        </div>

        <div className="form-actions">
          <button type="submit">Create Issue</button>
          <Link to="/" className="cancel-link">Cancel</Link>
        </div>
      </form>
    </div>
  );
};

export default IssueForm;