import React from 'react';
import "../styles/Error.scss"

const Error404: React.FC = () => {
  return (
    <div className='main-txt-size'>
        <div className='main--container'>
            <h1>Error 404</h1>
            <p>Rien à voir ici...😕</p>
        </div>
    </div>
  );
};

export default Error404;
