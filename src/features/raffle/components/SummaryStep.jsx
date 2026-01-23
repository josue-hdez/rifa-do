import { format } from "date-fns";
import { buildDrawDate } from "@/lib/utils";
import {
  ItemGroup,
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
} from "@/components/ui/item";

const SummaryStep = ({ values }) => {
  return (
    <ItemGroup className="space-y-3">
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Basic Information</ItemTitle>
          <ItemDescription>Title: {values.title}</ItemDescription>
          <ItemDescription>Description: {values.description}</ItemDescription>
          <ItemDescription>Image: {values.image[0].name}</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Ticket Configuration</ItemTitle>
          <ItemDescription>Max Tickets: {values.maxTickets}</ItemDescription>
          <ItemDescription>
            Ticket Price: RD$
            {values.ticketPrice.toLocaleString("en-US")}
          </ItemDescription>
          <ItemDescription>
            Min Tickets Per Participant: {values.minTicketsPerParticipant}
          </ItemDescription>
          <ItemDescription>
            Max Tickets Per Participant: {values.maxTicketsPerParticipant}
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Schedule Raffle</ItemTitle>
          <ItemDescription>
            Draw Date:{" "}
            {format(
              buildDrawDate(values.date, values.time),
              "MMMM do, yyyy hh:mm:ss a",
            )}
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemContent>
          <ItemTitle>Bank Accounts</ItemTitle>
          <ItemDescription>Bank Name: {values.bankName}</ItemDescription>
          <ItemDescription>
            Account Number: {values.accountNumber}
          </ItemDescription>
          <ItemDescription>
            Account Type:{" "}
            <span className="capitalize">{values.accountType}</span>
          </ItemDescription>
          <ItemDescription>
            Account Holder:{" "}
            <span className="uppercase">{values.accountHolder}</span>
          </ItemDescription>
        </ItemContent>
      </Item>
    </ItemGroup>
  );
};

export default SummaryStep;
