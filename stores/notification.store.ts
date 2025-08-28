import { create } from 'zustand';

export type TypeIdNotification = 'PROJECT_FRONTEND' | 'PROJECT_BACKEND';

interface INotification {
  message: string;
  id: TypeIdNotification;
}

interface INotificationStore {
  notifications: INotification[];

  handleShowNotification: (message: string, id: TypeIdNotification) => void;
  handleRemoveNotification: (id: TypeIdNotification) => void;
}

const useNotificationStore = create<INotificationStore>()((set, get) => ({
  notifications: [],

  handleShowNotification: (message: string, id: TypeIdNotification) => {
    const { notifications } = get();

    if (notifications.some((notification) => notification.id === id)) {
      return;
    }

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
