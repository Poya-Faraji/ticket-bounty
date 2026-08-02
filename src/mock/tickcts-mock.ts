type ticketDataType = {
  id: string;
  title: string;
  desc: string;
  done: boolean;
  path: string;
}[];

export const ticketData: ticketDataType = [
  {
    id: crypto.randomUUID(),
    title: "First ticket",
    desc: "First tickets description",
    done: true,
    path: crypto.randomUUID(),
  },
  {
    id: crypto.randomUUID(),
    title: "Second",
    desc: "This is another ticket",
    done: false,
    path: crypto.randomUUID(),
  },
];
