import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../contexts/CartContextProvider";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();

  const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();
  // console.log(item);
  return (
    <div>
      {/* <div className="">
        <img className="item-card" src={item.image} alt="" />
        <h3 className="title-card">{item.title}</h3>
        <button className="btn-card">ADD TO BAG · {item.price}</button>
        {item.owner ? (
          <>
            <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
          </>
        ) : null}
      </div> */}
      <div className="card">
        <img className="image-card" src={item.image} alt="" />
        <h1 className="title-card">{item.title}</h1>
        <p>{item.description}</p>
        <p>
          <button onClick={() => addProductToCart(item)}>
            ADD TO BAG · {item.price}
          </button>
          {item.owner ? (
            <>
              <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
              <button onClick={() => deleteProduct(item.id)}>Delete</button>
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
