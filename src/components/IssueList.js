// src/components/IssueList.js
import React from 'react';
import { Link } from 'react-router-dom';

const IssueList = ({ issues }) => {
  return (
    <div>
      <h2>All Issues</h2>
      {issues.length === 0 ? (
        <p>No issues created yet. <Link to="/new">Create your first issue</Link></p>
      ) : (
        <table className="issues-table">
          <thead>
            <tr>
              <th>Issue #</th>
              <th>Summary</th>
              <th>Status</th>
              <th>Owner</th>
              <th>Opened</th>
            </tr>
          </thead>
          <tbody>
            {issues.map(issue => (
              <tr key={issue.id}>
                <td>
                  <Link to={`/issue/${issue.id}`}>#{issue.id}</Link>
                </td>
                <td>
                  <Link to={`/issue/${issue.id}`}>
                    {issue.summary.split('\n')[0]}
                  </Link>
                </td>
                <td className={`status status-${issue.status}`}>
                  {issue.status}
                </td>
                <td>{issue.owner || 'Unassigned'}</td>
                <td>{new Date(issue.opened_on).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default IssueList;