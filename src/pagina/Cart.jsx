import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Cart() {
  const { cart, handleQuantityChange, removeFromCart, total } =
    useContext(CartContext);
  const { token } = useUser();
  return (
    <div className="container mt-4">
      <h4>Detalles del pedido:</h4>
      <table className="table">
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>
                <img src={item.img} alt={item.name} width="50" height="50" />
              </td>
              <td>{item.name}</td>
              <td>${item.price.toLocaleString()}</td>
              <td>
                <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleQuantityChange(item.id, -1)}
                >
                  -
                </button>
              </td>
              <td>{item.quantity}</td>
              <td>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => handleQuantityChange(item.id, 1)}
                >
                  +
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeFromCart(item.id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h5>Total: ${total.toLocaleString()}</h5>

      <button
        className="btn btn-dark"
        disabled={!token}
        onClick={() => {
          alert("No implementado aun!!");
        }}
      >
        Pagar
      </button>
    </div>
  );
}

export default Cart;
