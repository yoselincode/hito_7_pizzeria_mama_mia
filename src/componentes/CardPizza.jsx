import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CardPizza({ id, name, price, ingredients, img }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card-pizza">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>${price.toLocaleString()}</p>
      <hr />
      <p>Ingredientes</p>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <hr />
      <button
        className="btn-ver-mas"
        onClick={() => {
          navigate(`/pizza/${id}`);
        }}
      >
        Ver más
      </button>
      <button
        className="btn-agregar"
        onClick={() => addToCart({ id, name, price, ingredients, img })}
      >
        Añadir
      </button>
    </div>
  );
}

export default CardPizza;
