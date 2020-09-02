import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, price, image, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    //remove item from basket...

    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove of basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
