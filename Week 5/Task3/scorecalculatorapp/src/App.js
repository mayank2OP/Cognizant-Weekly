// Output: Renders the CalculateScore component with sample student props (Name, School, Total, goal)
import React from 'react';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div>
      <CalculateScore Name="John" School="ABC School" Total={250} goal={5} />
    </div>
  );
}

export default App;
