import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@eventhubfk/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
