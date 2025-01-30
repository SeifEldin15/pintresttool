'use client'
import { useState } from 'react';
import BoardInput from './components/BoardInput';
import ImageGrid from './components/ImageGrid';
import SizeSelector from './components/SizeSelector';

export default function Home() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedSize, setSelectedSize] = useState('medium');

  const handleBoardSubmit = async (url) => {
    setLoading(true);
    try {
      const response = await fetch('/api/scrape-pinterest', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });
      
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
      
      setImages(data.images.slice(0, 16)); // Limit to 16 images max
    } catch (error) {
      alert('Error importing Pinterest board: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageReplace = (index, newImage) => {
    const newImages = [...images];
    newImages[index] = newImage;
    setImages(newImages);
  };

  const handlePrint = () => {
    // Implement print functionality here
    // This would connect to your local printer's API or Zapier
    alert('Print functionality to be implemented');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Pinterest Board Printer
      </h1>
      
      <BoardInput onSubmit={handleBoardSubmit} isLoading={loading} />
      
      {images.length > 0 && (
        <>
          <SizeSelector
            selectedSize={selectedSize}
            onSizeChange={setSelectedSize}
          />
          
          <ImageGrid
            images={images}
            selectedSize={selectedSize}
            onImageReplace={handleImageReplace}
          />
          
          <div className="text-center mt-8">
            <button
              onClick={handlePrint}
              className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Send to Print
            </button>
          </div>
        </>
      )}
    </div>
  );
} 