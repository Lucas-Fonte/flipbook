import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import './book.css';

function App() {
  return (
    <div className="book">
      <HTMLFlipBook
        width={550}
        height={733}
        size="stretch"
        minWidth={315}
        maxWidth={1000}
        minHeight={400}
        maxHeight={1533}
        maxShadowOpacity={0.5}
        showCover={false}
      >
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg"
            alt="page1"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/Segovia_-_Acueducto_03.jpg"
            alt="page2"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gyeongbokgung-GeunJeongJeon.jpg"
            alt="page3"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Kinkaku3411.jpg"
            alt="page4"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg"
            alt="page5"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg"
            alt="page6"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/1/14/Segovia_-_Acueducto_03.jpg"
            alt="page7"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Gyeongbokgung-GeunJeongJeon.jpg"
            alt="page8"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Kinkaku3411.jpg"
            alt="page9"
          ></img>
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg"
            alt="page10"
          ></img>
        </div>
      </HTMLFlipBook>
    </div>
  );
}

export default App;
