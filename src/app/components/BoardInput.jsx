export default function BoardInput({ onSubmit, isLoading }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const url = e.target.url.value;
    onSubmit(url);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto my-8">
      <div className="flex gap-4">
        <input
          type="url"
          name="url"
          placeholder="Enter Pinterest board URL"
          required
          className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 disabled:bg-blue-300"
        >
          {isLoading ? 'Loading...' : 'Import'}
        </button>
      </div>
    </form>
  );
} 