import { Subjects, Publisher, PaymentCreatedEvent } from '@eventhubfk/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
