import  { useEffect, useState } from 'react';

const ImageListWithCopy = () => {
  const [imageNames, setImageNames] = useState<string[]>([]);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/images')
      .then((res) => res.json())
      .then((data) => setImageNames(data))
      .catch((err) => console.error('Failed to load image list', err));
  }, []);

  const copyText = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(`Copied: ${text}`);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Image Names</h2>
      {imageNames.map((img, idx) => (
        <div
          key={idx}
          className="flex items-center justify-between border rounded px-4 py-2 mb-2"
        >
          <span>{img}</span>
          <button
            className="bg-green-600 text-white px-3 py-1 rounded"
            onClick={() => copyText(img)}
          >
            Copy
          </button>
        </div>
      ))}
      {copied && <div className="text-green-600 mt-2">{copied}</div>}
    </div>
  );
};

export default ImageListWithCopy;
