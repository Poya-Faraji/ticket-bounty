import { Ticket } from "@/generated/prisma/client";

import { updateTicket } from "@/components/ticket/actions/updateTicket";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  ticket: Ticket;
};

const TicketUpdateForm = ({ ticket }: Props) => {
  return (
    <form
      action={updateTicket.bind(null, ticket.id)}
      className="flex flex-col gap-y-2"
    >
      <Label htmlFor="title">Title</Label>
      <Input id="title" name="title" defaultValue={ticket.title} />

      <Label htmlFor="title">Description</Label>
      <Textarea id="desc" name="desc" defaultValue={ticket.desc} />

      <Button type="submit">Update</Button>
    </form>
  );
};

export { TicketUpdateForm };
