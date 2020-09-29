import React from 'react';
import Book from './components/Book';

import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="global">
      <Book />
    </div>
  );
};

export default App;
