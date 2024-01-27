import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import VideoPlayer from './VideoPlayer';
import './styles.css'; // Pastikan Anda mengimpor file CSS

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <img
    src="logo1.png"
    alt="Logo"
    className="logo-image"/>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          </header>
          <h3 class="title">Indonesia</h3>
          <h4>
          Indonesia adalah negara kepulauan terbesar di dunia yang terletak di Asia Tenggara. Ibukotanya adalah Jakarta, sebuah pusat pemerintahan, ekonomi, dan kebudayaan. Dengan lebih dari 17.000 pulau, termasuk pulau-pulau utama seperti Jawa, Sumatra, Kalimantan, Sulawesi, dan Papua, Indonesia menawarkan keindahan alam yang luar biasa. Bahasa resmi negara ini adalah Bahasa Indonesia, meskipun terdapat beragam bahasa daerah di seluruh kepulauan. Mayoritas penduduk Indonesia menganut agama Islam, tetapi juga terdapat minoritas yang menganut agama-agama seperti Kristen, Hindu, Buddha, dan kepercayaan tradisional.
          </h4>

<div className="Media-container">
<p><b>Gambar</b></p>
  <div className="Image-container">
    
    <img
      src="https://www.kalderanews.com/wp-content/uploads/2021/08/Lambang-negara-Indonesia-Garuda-Pancasila.-KalderaNews.com-Ist.-600x381.jpg"
      alt=""
    />
    <img src={'./peta.jpg'} alt="" />
    <img src={'/borobudur.jpg'} alt="" />
  </div>

  <p><b>Video</b></p>
  <div className="Video-container">
    <div className="Video-player">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aKtb7Y3qOck?si=v_Q1iW-VGPcmOC57" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
    <div className="Video-player">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/BzknNI0eNJk"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="Video-player">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/ojQbArbuN4E"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
</div>

          <Link to="/">Home</Link>
        
      </div>
    </Router>
  );
}

export default App;
