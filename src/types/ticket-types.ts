export type TicketType = {
  id: string;
  title: string;
  desc: string;
  done: boolean;
  path: string;
  icon: "DONE" | "IN_PROGRESS" | "OPEN";
};
