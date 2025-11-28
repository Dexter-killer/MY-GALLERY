// src/App.jsx
import React from 'react';
import ImageGallery from './components/ImageGallery';
import './App.css';

function App() {
  const slides = [
    {
      url: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1400&q=80',
      title: 'Неоновые улицы',
    },
    {
      url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1400&q=80',
      title: 'Горный воздух',
    },
    {
      url: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80',
      title: 'Городской ритм',
    },
    {
      url: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1400&q=80',
      title: 'Тихая гавань',
    },
    {
      url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=80',
      title: 'Трасса в сумерках',
    },
    {
      url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1400&q=80',
      title: 'Закат в горах',
    }
  ];

  return (
    <div className="app-root">
      <header className="app-header">
        <div className="app-logo">
          Lux<span>Gallery</span>
        </div>
        <div className="app-badge">React · Premium UI</div>
      </header>

      <main className="app-main">
        <ImageGallery slides={slides} />
      </main>
    </div>
  );
}

export default App;
