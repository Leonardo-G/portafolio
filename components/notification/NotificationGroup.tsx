'use client';

import useNotificationStore from '@/stores/notification.store';
import Notification from './Notification';

export default function NotificationGroup() {
  const notifications = useNotificationStore((state) => state.notifications);
  return (
    <div className='fixed right-[20px] bottom-[20px] z-99 flex flex-col space-y-3'>
      {notifications.length > 0 &&
        notifications.map((notification) => (
          <Notification
            message={notification.message}
            key={notification.id}
            id={notification.id}
          />
        ))}
    </div>
  );
}
