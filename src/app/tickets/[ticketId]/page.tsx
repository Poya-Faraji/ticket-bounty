import { ticketData } from "@/mock/tickcts-mock";

type Props = {
  params: Promise<{
    ticketId: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { ticketId } = await params;

  const ticket = ticketData.find((ticket) => ticket.path === ticketId);

  if (ticket === undefined) {
    return <p>Failed to find the ticket with id: {ticketId}</p>;
  }

  return (
    <div>
      <div>{ticket?.title}</div>
      <div>{ticket?.desc}</div>
    </div>
  );
}
