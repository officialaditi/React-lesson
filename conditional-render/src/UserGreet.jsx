// using ternary operator

const UserGreet = ({ userName, isLoggedIn }) => {
  return isLoggedIn ? <h1> Welcome {userName}</h1> : <h2>Please Log In to continue</h2>;
};
export default UserGreet;
