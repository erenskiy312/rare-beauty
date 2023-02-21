import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();

  const navigate = useNavigate();
  console.log(item);
  return (
    <div>
      <div className="">
        <img className="item-card" src={item.image} alt="" />
        <h3 className="title-card">{item.title}</h3>
        <button className="btn-card">ADD TO BAG · {item.price}</button>
        {item.owner ? (
          <>
            <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
            <button onClick={() => deleteProduct(item.id)}>Delete</button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProductCard;
