import buildClient from '../../api/build-client';
import useRequest from '../../hooks/use-request';

const TicketShow = ({ data }) => {
 
  const { doRequest, errors } = useRequest({
    url: '/api/orders',
    method: 'post',
    body: {
      ticketId: data.id,
    },
    onSuccess: (order) =>
      Router.push('/orders/[orderId]', `/orders/${order.id}`),
  });

  return (
    <div>
      <h1>{data.title}</h1>
      <h4>Price: {data.price}</h4>
      {errors}
      <button onClick={() => doRequest()} className="btn btn-primary">
        Purchase
      </button>
    </div>
  );
};

// TicketShow.getInitialProps = async (context) => {
//   const { ticketId } = context.query;
//   const { data } = await client.get(`/api/tickets/${ticketId}`);

//   return { ticket: data };
// };

export async function getServerSideProps(context) {
    
    const { ticketId } = context.query;
    const client = buildClient(context);
    const { data } = await client.get(`/api/tickets/${ticketId}`);
  
    return { props : { data }}
  }

export default TicketShow;
