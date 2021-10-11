import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../../app';
import { Ticket } from '../../models/ticket';
import { natsWrapper } from '../../nats-wrapper';

it('has a route handler listening to /api/orders for post requests', async () => {
    const response = await request(app).post('/api/orders').send({});
  
    expect(response.status).not.toEqual(404);
});
  
it('can only be accessed if the user is signed in', async () => {
       const response = await request(app)
          .post('/api/orders')
          .send({})
          .expect(401);
  
});
  
it('returns a status other than 401 if the user is signed in', async () => {
      const response = await request(app)
         .post('/api/orders')
         .set('Cookie', global.signin())
         .send({})
         
      expect(response.status).not.toEqual(401);
});

it('returns an error if the ticket does not exist', async () => {

    const ticketId = new mongoose.Types.ObjectId();

    await request(app)
      .post('/api/orders')
      .set('Cookie', global.signin())
      .send({ ticketId })
      .expect(404);

});

it('return an error if the ticket is already reserved', async () => {

})

it('reserves a ticket', async () => {

})