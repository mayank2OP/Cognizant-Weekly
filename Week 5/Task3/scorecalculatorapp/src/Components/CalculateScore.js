// Output: Displays a styled scoreboard showing the student's Name, School, Total, Goal, and the calculated Average score
import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore({ Name, School, Total, goal }) {
  const average = Total / goal;
  return (
    <div className="score-board">
      <h2>Score Details</h2>
      <p>Name: {Name}</p>
      <p>School: {School}</p>
      <p>Total: {Total}</p>
      <p>Goal: {goal}</p>
      <p>Average: {average}</p>
    </div>
  );
}

export default CalculateScore;
