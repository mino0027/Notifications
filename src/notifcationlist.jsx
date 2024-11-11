// NotificationList to display a list of notifications
import React from 'react';
import Notification from './Notification';

function NotificationList({ notifications, onClear, onClearAll }) {
  return (
    <div>
      <h2>Notifications ({notifications.length})</h2>
      <button onClick={onClearAll}>Clear All</button>
      <div className="notification-list">
        {notifications.map(notification => (
          <Notification
            key={notification.id}
            {...notification}
            onClear={onClear}
          />
        ))}
      </div>
    </div>
  );
}

export default NotificationList;