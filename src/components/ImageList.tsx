// frontend/src/components/ImageList.jsx
import { useEffect, useState } from 'react';

const ImageList = () => {
  const [images, setImages] = useState([]);
  const [copied, setCopied] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/images')
      .then(res => res.json())
      .then(data => setImages(data))
      .catch(err => console.error('Error fetching images:', err));
  }, []);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(`Copied: ${text}`);
    setTimeout(() => setCopied(''), 2000);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Available Images</h2>
      {images.length === 0 && <p>No images found.</p>}
      <ul>
        {images.map((img, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <span>{img}</span>
            <button
              onClick={() => copyToClipboard(img)}
              style={{ marginLeft: '10px' }}
            >
              Copy
            </button>
          </li>
        ))}
      </ul>
      {copied && <p style={{ color: 'green' }}>{copied}</p>}
    </div>
  );
};

export default ImageList;
