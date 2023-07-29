import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

function Content() {
  return (
    <div>
      <App />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Content />);
