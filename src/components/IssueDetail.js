// src/components/IssueDetail.js
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const IssueDetail = ({ issues, updateIssue }) => {
  const { id } = useParams();
  const issue = issues.find(issue => issue.id === parseInt(id));

  if (!issue) {
    return <div>Issue not found</div>;
  }

  const handleStatusChange = (newStatus) => {
    updateIssue(issue.id, { status: newStatus });
  };

  const statusOptions = ['new', 'accepted', 'reviewed', 'started', 'closed'];

  return (
    <div>
      <h2>Issue #{issue.id} <span className={`status status-${issue.status}`}>({issue.status})</span></h2>
      
      <div className="issue-info">
        <h3>Information</h3>
        <p><strong>Owner:</strong> {issue.owner || 'Unassigned'}</p>
        <p><strong>Status:</strong> 
          <select 
            value={issue.status} 
            onChange={(e) => handleStatusChange(e.target.value)}
            className="status-select"
          >
            {statusOptions.map(status => (
              <option key={status} value={status}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </option>
            ))}
          </select>
        </p>
        <p><strong>Opened:</strong> {new Date(issue.opened_on).toLocaleString()}</p>
        <p><strong>Last Modified:</strong> {new Date(issue.modified_on).toLocaleString()}</p>
        
        <h3>Summary</h3>
        <div className="summary">
          {issue.summary.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
      </div>

      <Link to="/" className="back-link">&larr; Back to Issue List</Link>
    </div>
  );
};

export default IssueDetail;