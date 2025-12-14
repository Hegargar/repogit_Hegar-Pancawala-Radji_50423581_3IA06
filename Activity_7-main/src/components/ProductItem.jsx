export default function ProductItem({ item, onEdit, onDelete }) {
  return (
    <div className="flex justify-between p-4 bg-gray-100 rounded shadow">
      <span>{item.title}</span>

      <div className="flex gap-2">
        <button
          onClick={() => onEdit(item)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>

        <button
          onClick={() => onDelete(item.id)}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
