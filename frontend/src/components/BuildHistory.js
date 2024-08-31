import React from 'react';

function BuildHistory({ builds }) {
  return (
    <div>
      <h2>Build History</h2>
      <ul>
        {builds.map((build, index) => (
          <li key={index}>
            Build #{build.number}: {build.status} ({build.timestamp})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BuildHistory;
