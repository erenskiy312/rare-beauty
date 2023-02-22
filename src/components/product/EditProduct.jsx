import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../contexts/ProductContextProvider";

const EditProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [stock, setStock] = useState("");

  const {
    categories,
    getCategories,
    getOneProduct,
    oneProduct,
    updateProduct,
  } = useProducts();

  useEffect(() => {
    getCategories();
    getOneProduct(id);
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category);
      setCategory(oneProduct.category);
      console.log(oneProduct);
      setStock(oneProduct.stock);
    }
  }, [oneProduct]);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleSave(e) {
    e.preventDefault();
    console.log(category, title, description, price, image);
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    if (image) {
      newProduct.append("image", image);
    }
    newProduct.append("stock", stock);
    updateProduct(id, newProduct);
    navigate("/products");
  }
  return (
    <div>
      <form action="submit" onSubmit={handleSave}>
        <ul className="add-list">
          <li className="add-item">
            <h1 className="add-title">Edit Product</h1>
          </li>
          <li className="add_item"></li>
          <li className="add_item"></li>
          <li className="add-item">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select-category"
            >
              <option value="">-----</option>

              {categories.map((item) => (
                <option value={item.slug} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </li>
          <li className="add-item">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="add-inputs"
              type="text"
              placeholder="Title"
            />
          </li>
          <li className="add-item">
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="add-inputs"
              type="text"
              placeholder="Description"
            />
          </li>
          <li className="add-item">
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="add-inputs"
              type="text"
              placeholder="Price"
            />
          </li>
          <li className="add-item">
            <p>Image Before:</p>
            <img width={100} src={oneProduct?.image} alt="" />
          </li>
          <li className="add-item">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              className="image-inputs"
              accept="image/*"
              type="file"
            />
          </li>

          <li className="add-item">
            <select
              value={stock}
              className="select-category"
              onChange={(e) => setStock(e.target.value)}
            >
              <option value="-----">-----</option>
              <option value="in_stock">in_stock</option>
              <option value="out_of_stock">out_of_stock</option>
            </select>
          </li>
          <button className="btn-add">Save Product</button>
        </ul>
      </form>
    </div>
  );
};

export default EditProduct;
