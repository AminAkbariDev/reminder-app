interface IReminder {
  id: number;
  title: string;
}

type ReminderState = {
  reminder: IReminder[];
};

type ReminderAction = {
  type: string;
  reminder: IReminder;
};

type DispatchType = (args: ReminderAction) => ReminderAction;
