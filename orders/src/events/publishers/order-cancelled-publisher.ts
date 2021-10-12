import { Subjects, Publisher, OrderCancelledEvent } from '@eventhubfk/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
