export enum OrderStatus{
    //When order created but ticket not reserved
    Created = 'created',
    // Ticket reserved but user cancelled the order
    Cancelled = 'cancelled',
    //Order reserved ticket
    AwaitingPayment = 'awaiting:payment',
    //reserved order provided ticket!
    Complete = 'complete'
}