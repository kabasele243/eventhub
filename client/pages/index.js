import buildClient from '../api/build-client';

const LandingPage = ({ data }) => {
  
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
  const { data } = await client.get('/api/users/currentuser');

  return { props : { data }}
}

export default LandingPage;