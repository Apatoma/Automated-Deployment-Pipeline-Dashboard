import React, { useEffect, useState } from 'react';
import socket from '../socket';
import PipelineStatus from './PipelineStatus';
import BuildHistory from './BuildHistory';
import MetricsChart from './MetricsChart';

function Dashboard() {
  const [pipelineStatus, setPipelineStatus] = useState({});

  useEffect(() => {
    socket.on('pipelineStatus', data => {
      setPipelineStatus(data);
    });

    return () => {
      socket.off('pipelineStatus');
    };
  }, []);

  return (
    <div>
      <h1>Automated Deployment Pipeline Dashboard</h1>
      <PipelineStatus status={pipelineStatus} />
      <BuildHistory builds={pipelineStatus.builds || []} />
      <MetricsChart metrics={pipelineStatus.metrics || {}} />
    </div>
  );
}

export default Dashboard;
