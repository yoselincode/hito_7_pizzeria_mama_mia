import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Nabvar() {
  const { total } = useContext(CartContext);
  const { token, logout } = useUser();

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      {token ? (
        <>
          <Link to="/profile">Profile</Link>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
      <Link to="/cart">🛒 Total: ${total.toLocaleString()}</Link>
    </nav>
  );
}

export default Nabvar;
