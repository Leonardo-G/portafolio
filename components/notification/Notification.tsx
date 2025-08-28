'use client';

import useNotificationStore from '@/stores/notification.store';
import { X } from 'lucide-react';

interface INotification {
  message: string;
  id: string;
}

export default function Notification({ message, id }: INotification) {
  const handleRemoveNotification = useNotificationStore(
    (state) => state.handleRemoveNotification,
  );

  return (
    <div className='border-orange-secondary relative max-w-md min-w-80 justify-around rounded-lg border-l-4 bg-white p-4 pr-12 shadow-xl'>
      <p className='truncate text-gray-600'>{message}</p>
      <div
        className='absolute top-[10px] right-[15px] cursor-pointer'
        onClick={() => handleRemoveNotification(id)}
      >
        <X width={15} className='text-gray-400 hover:text-gray-700' />
      </div>
    </div>
  );
}
