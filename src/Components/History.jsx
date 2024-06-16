import React from 'react';
import '../Css/History.css';
import HistoryImage from '../img/icon/History.jpg';

const History = () => {
  return (
    <div className="history-container">
      <img src={HistoryImage} className="img-responsive img-fluid mx-auto d-block" alt="History" />
    </div>
  );
};

export default History;
