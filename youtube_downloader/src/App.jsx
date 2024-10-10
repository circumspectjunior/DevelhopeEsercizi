// src/App.jsx
import React, { useState } from 'react';

const App = () => {
  const [url, setUrl] = useState('');

  const handleDownload = async () => {
    const response = await fetch(`http://localhost:5000/download?url=${encodeURIComponent(url)}`);
    const blob = await response.blob();
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'video.mp4';
    link.click();
  };

  return (
    <div>
      <h1>YouTube Downloader</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter YouTube URL"
      />
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default App;


