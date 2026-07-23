// Output: Displays cohort details in a styled box, applying conditional green text to the heading if the status is 'ongoing', otherwise blue
import React from 'react';
import styles from './CohortDetails.module.css';

function CohortDetails({ cohort }) {
  const h3Style = {
    color: cohort.status === 'ongoing' ? 'green' : 'blue'
  };

  return (
    <div className={styles.box}>
      <h3 style={h3Style}>{cohort.name}</h3>
      <dl>
        <dt>Status:</dt>
        <dd>{cohort.status}</dd>
        <dt>Start Date:</dt>
        <dd>{cohort.startDate}</dd>
      </dl>
    </div>
  );
}

export default CohortDetails;
