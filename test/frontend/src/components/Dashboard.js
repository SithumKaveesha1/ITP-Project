import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
  const [trainerInfo, setTrainerInfo] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const userId = localStorage.getItem('userId');

  const [gymStats, setGymStats] = useState({
    totalMembers: 150,
    activeMembers: 120,
    upcomingSessions: 5,
    totalClasses: 10,
  });

  const [upcomingClasses, setUpcomingClasses] = useState([
    { time: '9:00 AM', className: 'Yoga for Beginners', location: 'Studio A' },
    { time: '11:00 AM', className: 'HIIT Workout', location: 'Studio B' },
    { time: '1:00 PM', className: 'Strength Training', location: 'Gym Floor' },
  ]);

  useEffect(() => {
    async function fetchTrainer() {
      try {
        const response = await axios.get(`http://localhost:5000/api/coach/dashboard?id=${userId}`);
        setTrainerInfo(response.data);
        setFormData(response.data);
      } catch (error) {
        console.error('Error fetching trainer:', error);
      }
    }
    fetchTrainer();
  }, [userId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const toggleEdit = async () => {
    if (isEditing) {
      try {
        await axios.put(`http://localhost:5000/api/coach/dashboard/update/${userId}`, formData);
        setTrainerInfo(formData);
      } catch (error) {
        console.error('Error updating profile:', error);
      }
    }
    setIsEditing(!isEditing);
  };

  const deleteProfile = async () => {
    if (window.confirm('Are you sure you want to delete your profile?')) {
      try {
        await axios.delete(`http://localhost:5000/api/coach/delete/${userId}`);
        setTrainerInfo(null);
      } catch (error) {
        console.error('Error deleting profile:', error);
      }
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h2>Welcome, {trainerInfo?.name ? `Coach ${trainerInfo.name}` : 'Guest'}!</h2>
        <p>Manage gym activities, check stats, and view upcoming classes.</p>
      </header>

      <div className="dashboard-body">
        <div className="dashboard-left">
          <div className="stats-card">
            <h3>Gym Stats</h3>
            <ul>
              <li>Total Members: {gymStats.totalMembers}</li>
              <li>Active Members: {gymStats.activeMembers}</li>
              <li>Total Classes: {gymStats.totalClasses}</li>
              <li>Upcoming Sessions: {gymStats.upcomingSessions}</li>
            </ul>
          </div>

          {trainerInfo ? (
            <div className="profile-card">
              <h3>Your Profile</h3>
              <div className="profile-info">
                <div className="profile-image-wrapper">
                  <img src={trainerInfo.profilePicture || ''} alt="Profile" className="profile-image" />
                </div>
                <div className="profile-details">
                  {isEditing ? (
                    <>
                      <label>Name:</label>
                      <input type="text" name="name" value={formData.name} onChange={handleChange} />
                      <label>Email:</label>
                      <input type="email" name="email" value={formData.email} onChange={handleChange} />
                      <label>Profile Picture URL:</label>
                      <input type="text" name="profilePicture" value={formData.profilePicture} onChange={handleChange} />
                    </>
                  ) : (
                    <>
                      <p><strong>Name:</strong> {trainerInfo.name}</p>
                      <p><strong>Email:</strong> {trainerInfo.email}</p>
                    </>
                  )}
                </div>
              </div>
              <button onClick={toggleEdit}>{isEditing ? 'Save Changes' : 'Edit Profile'}</button>
              <button onClick={deleteProfile}>Delete Profile</button>
            </div>
          ) : (
            <p className="deleted-message">Profile Deleted</p>
          )}
        </div>

        <div className="dashboard-right">
          <div className="classes-card">
            <h3>Upcoming Classes</h3>
            <ul>
              {upcomingClasses.map((classItem, index) => (
                <li key={index}><strong>{classItem.className}</strong> at {classItem.time} in {classItem.location}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
