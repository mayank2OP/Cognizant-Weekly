// Output: Renders multiple CohortDetails components based on the static cohorts array
import React from 'react';
import CohortDetails from './CohortDetails';

function App() {
  const cohorts = [
    { id: 1, name: 'React Development', status: 'ongoing', startDate: '2023-01-01' },
    { id: 2, name: 'Java Full Stack', status: 'completed', startDate: '2022-06-01' }
  ];

  return (
    <div>
      {cohorts.map(c => <CohortDetails key={c.id} cohort={c} />)}
    </div>
  );
}

export default App;
