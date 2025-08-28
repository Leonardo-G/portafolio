import { create } from 'zustand';

interface INotification {
  message: string;
  id: string;
}

interface INotificationStore {
  notifications: INotification[];

  handleShowNotification: (message: string) => void;
  handleRemoveNotification: (id: string) => void;
}

const useNotificationStore = create<INotificationStore>()((set) => ({
  notifications: [],

  handleShowNotification: (message: string) => {
    const id = crypto.randomUUID();
    const notificationObject: INotification = { message, id };

    set((state) => ({
      notifications: [...state.notifications, notificationObject],
    }));

    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter(
          (notification) => notification.id !== id,
        ),
      }));
    }, 3500);
  },
  handleRemoveNotification: (id: string) => {
    set((state) => ({
      notifications: state.notifications.filter(
        (notification) => notification.id !== id,
      ),
    }));
  },
}));

export default useNotificationStore;
