export default function SizeSelector({ selectedSize, onSizeChange }) {
  const sizes = [
    { id: 'small', label: '2x2', dimensions: '8" x 8"' },
    { id: 'medium', label: '3x3', dimensions: '12" x 12"' },
    { id: 'large', label: '4x4', dimensions: '16" x 16"' },
  ];

  return (
    <div className="flex justify-center gap-4 my-8">
      {sizes.map((size) => (
        <button
          key={size.id}
          onClick={() => onSizeChange(size.id)}
          className={`px-4 py-2 rounded-lg ${
            selectedSize === size.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {size.label} ({size.dimensions})
        </button>
      ))}
    </div>
  );
} 