export default function ImageGrid({ images, selectedSize, onImageReplace }) {
  const sizes = {
    small: 'grid-cols-2 gap-2',
    medium: 'grid-cols-3 gap-3',
    large: 'grid-cols-4 gap-4'
  };

  const handleImageClick = (index) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => onImageReplace(index, e.target.result);
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  return (
    <div className={`grid ${sizes[selectedSize]} max-w-4xl mx-auto p-4`}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square cursor-pointer hover:opacity-80"
          onClick={() => handleImageClick(index)}
        >
          <img
            src={image}
            alt={`Grid image ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
    </div>
  );
} 