import React from "react";
import "./Product.css";
import StarIcon from "@material-ui/icons/Star";
import { useStateValue } from "./StateProvider";
// import Button from "@material-ui/core/Button";

function Product({ id, title, description, image, price, rating }) {
  const [{}, dispatch] = useStateValue();

  const addToBasket = () => {
    //ADD ITEM TO BASKET
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>
          <strong>{title}</strong>
        </p>
        <p className="product__description">{description}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>
                <StarIcon />
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="iPad-Pro" />
      <span
        role="button"
        class="a-button a-button-text a-spacing-top-mini a-button-span12 a-button-primary button"
        onClick={addToBasket}
      >
        Add to basket
      </span>
    </div>
  );
}

export default Product;
