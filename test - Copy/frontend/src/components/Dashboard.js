import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  // Dummy data for gym stats and upcoming classes
  const gymStats = {
    totalMembers: 150,
    activeMembers: 120,
    upcomingSessions: 5,
    totalClasses: 10,
  };

  const upcomingClasses = [
    { time: '9:00 AM', className: 'Yoga for Beginners', location: 'Studio A' },
    { time: '11:00 AM', className: 'HIIT Workout', location: 'Studio B' },
    { time: '1:00 PM', className: 'Strength Training', location: 'Gym Floor' },
  ];

  const trainerInfo = {
    name: 'Coach John Doe',
    email: 'coach.john@example.com',
    profilePicture: 'https://via.placeholder.com/150',
    role: 'Fitness Trainer',
    experience: '5 years',
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome, Coach {trainerInfo.name}!</h2>
        <p>Manage gym activities, check stats, and view upcoming classes.</p>
      </header>

      <div className="dashboard-body">
        <div className="dashboard-left">
          {/* Gym Stats */}
          <div className="stats-card">
            <h3>Gym Stats</h3>
            <ul>
              <li>Total Members: {gymStats.totalMembers}</li>
              <li>Active Members: {gymStats.activeMembers}</li>
              <li>Total Classes: {gymStats.totalClasses}</li>
              <li>Upcoming Sessions: {gymStats.upcomingSessions}</li>
            </ul>
          </div>

          {/* Trainer Profile */}
          <div className="profile-card">
            <h3>Your Profile</h3>
            <div className="profile-info">
              <div className="profile-image-wrapper">
                <img
                  src={trainerInfo.profilePicture}
                  alt="Profile"
                  className="profile-image"
                />
              </div>
              <div className="profile-details">
                <div className="profile-item">
                  <i className="fas fa-user-circle"></i>
                  <p><strong>Name:</strong> {trainerInfo.name}</p>
                </div>
                <div className="profile-item">
                  <i className="fas fa-envelope"></i>
                  <p><strong>Email:</strong> {trainerInfo.email}</p>
                </div>
                <div className="profile-item">
                  <i className="fas fa-briefcase"></i>
                  <p><strong>Role:</strong> {trainerInfo.role}</p>
                </div>
                <div className="profile-item">
                  <i className="fas fa-calendar-alt"></i>
                  <p><strong>Experience:</strong> {trainerInfo.experience}</p>
                </div>
              </div>
            </div>
            <button className="edit-profile-button">Edit Profile</button>
          </div>
        </div>

        <div className="dashboard-right">
          {/* Upcoming Classes */}
          <div className="classes-card">
            <h3>Upcoming Classes</h3>
            <ul>
              {upcomingClasses.map((classItem, index) => (
                <li key={index}>
                  <strong>{classItem.className}</strong> at {classItem.time} in {classItem.location}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
