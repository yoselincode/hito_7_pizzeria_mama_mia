import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function Pizza() {
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useContext(CartContext);
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
        if (!response.ok) throw new Error("Error al obtener la pizza");
        const data = await response.json();
        setPizza(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPizza();
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={pizza?.img}
            alt={pizza?.name}
            className="img-fluid rounded"
          />
        </div>
        <div className="col-md-6">
          <h2 className="text-capitalize">{pizza?.name}</h2>
          <p>{pizza?.desc}</p>
          <h4 className="text-success">${pizza?.price.toLocaleString()}</h4>
          <h5>Ingredientes:</h5>
          <ul>
            {pizza?.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <button
            className="btn btn-primary"
            onClick={() =>
              addToCart({
                id: pizza.id,
                name: pizza.name,
                price: pizza.price,
                ingredients: pizza.ingredients,
                img: pizza.img,
              })
            }
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pizza;
