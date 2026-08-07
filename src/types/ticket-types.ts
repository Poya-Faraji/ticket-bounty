export type TicketType = {
  id: string;
  title: string;
  desc: string;
  done: boolean;
  icon: "DONE" | "IN_PROGRESS" | "OPEN";
};
