import React from 'react';

function PipelineStatus({ status }) {
  return (
    <div>
      <h2>Pipeline Status</h2>
      <p>Status: {status.status || 'N/A'}</p>
      <p>Last Build Time: {status.lastBuildTime || 'N/A'}</p>
    </div>
  );
}

export default PipelineStatus;
