export type TicketType = {
  id: string;
  title: string;
  desc: string;
  done: boolean;
  path: string;
  icon: "DONE" | "OPEN" | "IN_PROGRESS";
};

export const ticketData: TicketType[] = [
  {
    id: "44e9d5cc-8f70-4e9a-97b9-afb3c011dd2c",
    title: "First ticket",
    desc: "First tickets description",
    done: true,
    path: "c06266c0-05c3-4282-bc83-dad2660d54e0",
    icon: "DONE",
  },
  {
    id: "0243ad55-389d-4a55-b858-a9d2305bb9db",
    title: "Second",
    desc: "This is another ticket",
    done: false,
    path: "2a08cffd-f859-42b1-999c-6960781f3033",
    icon: "IN_PROGRESS",
  },
];
