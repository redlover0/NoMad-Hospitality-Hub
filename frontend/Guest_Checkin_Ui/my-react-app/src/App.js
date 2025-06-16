import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <header className="header">MICHIGAN CENTRAL</header>

      <h1 className="title">NoMad Hotel Guest Checkin</h1>

      <div className="form-row">
        <div className="form-group">
          <label>Guest First Name</label>
          <input type="text" className="input" disabled />
        </div>
        <div className="form-group">
          <label>Guest last Name</label>
          <input type="text" className="input" disabled />
        </div>
      </div>

      <div className="dropdown">
        <select className="select" disabled>
          <option>royal suite</option>
        </select>
      </div>

      <div className="rooms-section">
        <div className="available-rooms-label">available rooms</div>
        <div className="rooms">
          {[1832, 1834, 1839, 1843, 1854].map((room) => (
            <div key={room} className="room-box">{room}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
