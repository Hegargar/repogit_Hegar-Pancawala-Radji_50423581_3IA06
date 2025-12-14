import { useEffect, useState } from "react";
import {
  getProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../api/productApi";

import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  const [title, setTitle] = useState("");
  const [editId, setEditId] = useState(null);

  // GET DATA
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  // ADD
  const handleAdd = async () => {
    if (!title) return alert("Nama produk wajib!");
    const newProduct = await addProduct(title);
    setProducts([...products, newProduct]);
    setTitle("");
  };

  // EDIT
  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title);
  };

  // UPDATE
  const handleUpdate = async () => {
    const updated = await updateProduct(editId, title);
    setProducts(
      products.map((p) =>
        p.id === editId ? { ...p, title: updated.title } : p
      )
    );
    setEditId(null);
    setTitle("");
  };

  // DELETE
  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((p) => p.id !== id));
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5">
      <h1 className="text-3xl font-bold mb-5 text-center">
        React CRUD + JSON API 
      </h1>

      <ProductForm
        title={title}
        setTitle={setTitle}
        editId={editId}
        onAdd={handleAdd}
        onUpdate={handleUpdate}
      />

      <ProductList
        products={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </div>
  );
}
