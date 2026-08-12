export const homePath = (): string => {
  return "/";
};

export const ticketsPath = (): string => {
  return "/tickets";
};

export const ticketPath = (id: string): string => {
  return `/tickets/${id}`;
};

export const ticketEditPath = (id: string): string => {
  return `/tickets/${id}/edit`;
};
