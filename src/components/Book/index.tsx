import React, { useRef, useState } from 'react';
import HTMLFlipBook from 'react-pageflip';
import './styles.css';
import logo from '../../assets/logo.png';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const urls = [
  'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/14/Segovia_-_Acueducto_03.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gyeongbokgung-GeunJeongJeon.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ad/Kinkaku3411.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/14/Segovia_-_Acueducto_03.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/9/9a/Gyeongbokgung-GeunJeongJeon.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/ad/Kinkaku3411.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/d/da/The_Parthenon_in_Athens.jpg',
];

const Book: React.FC = () => {
  const flipBookElement = useRef<any>(null);
  const [page, setPage] = useState<number>(0);
  const onFlip = (event: any) => {
    const currentPage: number = event.data;
    setPage(currentPage);
  };

  const nextButtonClick = () => {
    flipBookElement.current.getPageFlip().flipNext();
  };

  const prevButtonClick = () => {
    flipBookElement.current.getPageFlip().flipPrev();
  };

  return (
    <div className="container">
      <div className="book-header">
        <img src={logo} alt="logo" />
      </div>
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
        onFlip={onFlip}
        ref={flipBookElement}
      >
        {urls.map((url, index) => (
          <div className="page" key={'page' + index}>
            <img src={url} alt={'page' + index}></img>
          </div>
        ))}
      </HTMLFlipBook>
      <div className="book-footer">
        <div className="book-pagination">
          <AiOutlineArrowLeft size={30} onClick={prevButtonClick} />
          <span>
            Page {page + 1} of {urls.length}
          </span>
          <AiOutlineArrowRight size={30} onClick={nextButtonClick} />
        </div>
      </div>
    </div>
  );
};

export default Book;
