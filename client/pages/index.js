import buildClient from '../api/build-client';

const LandingPage = ({ data }) => {
  // console.log('Landing Bro', data)
  let currentUser = data.currentUser;
  return (
    currentUser ? (
    <h1>You are signed in</h1>
  ) : (
    <h1>You are NOT signed in</h1>
  ))
};


export async function getServerSideProps(context) {

  const client = buildClient(context);
  // console.log(client)
  const { data } = await client.get('/api/users/currentuser');
  // console.log(data)

  return { props : { data }}
}

export default LandingPage;
