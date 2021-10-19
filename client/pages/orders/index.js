import buildClient from '../../api/build-client';

const OrderIndex = ({ data }) => {
  console.log(data)
  return (
    <ul>
      {data.map((order) => {
        return (
          <li key={order.id}>
            {order.ticket.title} - {order.status}
          </li>
        );
      })}
    </ul>
  );
};

export async function getServerSideProps(context) {

const client = buildClient(context);
const { data } = await client.get('/api/orders');

  return { props : { data }}
}


// OrderIndex.getInitialProps = async (context, client) => {
//   const { data } = await client.get('/api/orders');

//   return { orders: data };
// };

export default OrderIndex;
