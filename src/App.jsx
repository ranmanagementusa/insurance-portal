import React, { useState } from 'react';

const mockPolicies = [
  {
    companyName: 'Tulane Enterprises LLC',
    policyType: 'Umbrella Policy',
    startDate: '10-07-2025',
    endDate: '10-07-2026',
    agent: 'Nick Thompson',
    comments: 'Policy renewed with updated building value.',
  },
  {
    companyName: 'Belk Avenue Operations LLC',
    policyType: 'General Liability',
    startDate: '09-01-2025',
    endDate: '09-01-2026',
    agent: 'Amin Mulji',
    comments: 'Audit refund pending follow-up.',
  },
];

export default function InsurancePortal() {
  const [policies, setPolicies] = useState(mockPolicies);
  const [newComment, setNewComment] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleCommentSave = (index) => {
    const updatedPolicies = [...policies];
    updatedPolicies[index].comments = newComment;
    setPolicies(updatedPolicies);
    setNewComment('');
    setSelectedIndex(null);
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>
        Insurance Management Portal
      </h1>

      <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Policy Type</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Agent</th>
            <th>Comments</th>
            <th>Update</th>
          </tr>
        </thead>
        <tbody>
          {policies.map((policy, index) => (
            <tr key={index} style={{ borderTop: '1px solid #ccc' }}>
              <td>{policy.companyName}</td>
              <td>{policy.policyType}</td>
              <td>{policy.startDate}</td>
              <td>{policy.endDate}</td>
              <td>{policy.agent}</td>
              <td>
                {selectedIndex === index ? (
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                ) : (
                  policy.comments
                )}
              </td>
              <td>
                {selectedIndex === index ? (
                  <button onClick={() => handleCommentSave(index)}>Save</button>
                ) : (
                  <button onClick={() => setSelectedIndex(index)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
