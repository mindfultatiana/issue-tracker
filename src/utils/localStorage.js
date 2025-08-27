// src/utils/localStorage.js
const STORAGE_KEY = 'issue-tracker-data';

export const loadIssues = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : getInitialData();
  } catch (error) {
    console.error('Error loading from localStorage:', error);
    return getInitialData();
  }
};

export const saveIssues = (issues) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(issues));
  } catch (error) {
    console.error('Error saving to localStorage:', error);
  }
};

const getInitialData = () => [
  {
    id: 1,
    owner: 'John Doe',
    status: 'new',
    summary: 'Fix login page styling\n\nThe login form is not properly aligned on mobile devices. Need to update CSS.',
    opened_on: new Date(Date.now() - 86400000).toISOString(),
    modified_on: new Date(Date.now() - 86400000).toISOString()
  },
  {
    id: 2,
    owner: 'Jane Smith',
    status: 'started',
    summary: 'Add search functionality\n\nUsers need to be able to search through issues by title and content.',
    opened_on: new Date(Date.now() - 172800000).toISOString(),
    modified_on: new Date().toISOString()
  }
];