import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__img"
        src="https://images.unsplash.com/photo-1508614823792-1f56af914148?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        alt="shopping img"
      />

      {/* product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="1"
          title="apple iPad-Pro(12.9-inch,cell,256gb,sil)"
          // description="From True Tone to ProMotion, everything looks stunning and feels responsive on iPad Pro. "
          image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-silver-202003?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583550059785"
          price={1249}
          rating={5}
        />
        <Product
          id="1"
          title="YSL Women Sling Bag (Black)"
          // description="From True Tone to ProMotion, everything looks stunning and feels responsive on iPad Pro. "
          image="https://images-na.ssl-images-amazon.com/images/I/61f-GOu40XL._UL1000_.jpg"
          price={600}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="1"
          title="Fossil Gen 5 Carlyle Stainless Steel Touchscreen Men's Smartwatch"
          // description="From True Tone to ProMotion, everything looks stunning and feels responsive on iPad Pro. "
          image="https://images-na.ssl-images-amazon.com/images/I/71XWG48C-NL._UL1500_.jpg"
          price={306}
          rating={5}
        />
        <Product
          id="1"
          title="Think and Grow Rich"
          // description="From True Tone to ProMotion, everything looks stunning and feels responsive on iPad Pro. "
          image="https://images-na.ssl-images-amazon.com/images/I/51Y8jwGiebL._SX328_BO1,204,203,200_.jpg"
          price={2.5}
          rating={5}
        />
        <Product
          id="1"
          title="Russell Hobbs  19 Bar Capsule Espresso Cappuccino Coffee Maker"
          // description="From True Tone to ProMotion, everything looks stunning and feels responsive on iPad Pro. "
          image="https://images-na.ssl-images-amazon.com/images/I/71yRtczbX7L._SL1500_.jpg"
          price={200}
          rating={5}
        />
      </div>

      <div className="home__row">
        <Product
          id="1"
          title="Nike Men's Air Zoom Vomero 14 Running Shoes"
          // description="From True Tone to ProMotion, everything looks stunning and feels responsive on iPad Pro. "
          image="https://images-na.ssl-images-amazon.com/images/I/41MMCtdmA0L.jpg"
          price={160}
          rating={5}
        />
      </div>
      {/* Product */}
    </div>
  );
}

export default Home;

// "https://img.favpng.com/23/3/18/amazon-com-online-shopping-vector-graphics-illustration-png-favpng-0zCYRAdpTFqEkK5wD0zKfiSkN.jpg"
// https://image.freepik.com/free-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg
