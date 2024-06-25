// src/components/Notifications.jsx
import React from 'react';

const Notifications = () => {
  const notifications = [
    { id: 1, message: 'New order received', time: '10 minutes ago' },
    { id: 2, message: 'New user registered', time: '30 minutes ago' },
    { id: 3, message: 'Product out of stock', time: '1 hour ago' },
  ];

  return (
    <div className="notifications">
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            {notification.message} - <span>{notification.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
