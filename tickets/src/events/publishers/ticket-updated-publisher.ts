import { Publisher, Subjects, TicketUpdatedEvent } from '@eventhubfk/common';


export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
    subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}