import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const { getCategories, categories, createProduct } = useProducts();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  function handleSave() {
    console.log(title, description, price, category, image);
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    createProduct(newProduct);
  }

  return (
    <div>
      <form action="submit">
        <ul className="add-list">
          <li className="add-item">
            <h1 className="add-title">Create Product</h1>
          </li>
          <li className="add-item">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="select-category"
            >
              <option value="">Choose category</option>

              {categories.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </li>
          <li className="add-item">
            <input
              onChange={(e) => setTitle(e.target.value)}
              className="add-inputs"
              type="text"
              placeholder="Title"
            />
          </li>
          <li className="add-item">
            <input
              onChange={(e) => setDescription(e.target.value)}
              className="add-inputs"
              type="text"
              placeholder="Description"
            />
          </li>
          <li className="add-item">
            <input
              onChange={(e) => setPrice(e.target.value)}
              className="add-inputs"
              type="text"
              placeholder="Price"
            />
          </li>
          <li className="add-item">
            <input
              onChange={(e) => setImage(e.target.files[0])}
              className="image-inputs"
              accept="image/*"
              type="file"
            />
          </li>
          <button onClick={handleSave} className="btn-add">
            Add Product
          </button>
        </ul>
      </form>
    </div>
  );
};

export default AddProduct;
