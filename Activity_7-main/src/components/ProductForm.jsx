export default function ProductForm({
  title,
  setTitle,
  editId,
  onAdd,
  onUpdate,
}) {
  return (
    <div className="flex gap-2 mb-5">
      <input
        type="text"
        placeholder="Nama produk..."
        className="flex-1 border rounded px-3 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      {editId ? (
        <button
          onClick={onUpdate}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Update
        </button>
      ) : (
        <button
          onClick={onAdd}
          className="bg-green-600 text-white px-4 rounded"
        >
          Add
        </button>
      )}
    </div>
  );
}
