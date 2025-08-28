'use client';

import useNotificationStore, {
  TypeIdNotification,
} from '@/stores/notification.store';
import { X } from 'lucide-react';

import { motion } from 'motion/react';

interface INotification {
  message: string;
  id: TypeIdNotification;
}

export default function Notification({ message, id }: INotification) {
  const handleRemoveNotification = useNotificationStore(
    (state) => state.handleRemoveNotification,
  );

  return (
    <motion.div
      className='border-orange-secondary relative max-w-md min-w-80 justify-around rounded-lg border-l-4 bg-white p-4 pr-12 shadow-xl'
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
    >
      <p className='truncate text-gray-600'>{message}</p>
      <div
        className='absolute top-[10px] right-[15px] cursor-pointer'
        onClick={() => handleRemoveNotification(id)}
      >
        <X width={15} className='text-gray-400 hover:text-gray-700' />
      </div>
    </motion.div>
  );
}
