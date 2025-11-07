import Nav from "../components/nav";
const Login = () => {

  return (
    <>
      <Nav />
      <div>Login Page</div>
      <form action="">
        <input type="text" placeholder="Username" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}
export default Login;