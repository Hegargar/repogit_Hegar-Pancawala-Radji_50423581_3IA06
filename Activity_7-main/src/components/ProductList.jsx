import ProductItem from "./ProductItem";

export default function ProductList({ products, onEdit, onDelete }) {
  return (
    <div className="space-y-3">
      {products.map((item) => (
        <ProductItem
          key={item.id}
          item={item}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
