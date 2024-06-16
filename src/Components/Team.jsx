import React from 'react';
import '../Css/History.css';
import TeamImage from '../img/icon/Team.jpg';

const Team = () => {
  return (
    <div className="history-container">
      <img src={TeamImage} className="img-responsive img-fluid mx-auto d-block" alt="History" />
    </div>
  );
};
export default Team;