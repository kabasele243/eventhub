import { Publisher, Subjects, TicketCreatedEvent } from '@eventhubfk/common';


export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
    subject: Subjects.TicketCreated = Subjects.TicketCreated;
}