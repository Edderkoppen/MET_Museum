import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import styles from "./Footer.scss"

export default function App() {
  return (
    <MDBFooter className='test text-center text-lg-left' >
      <div className='text-center p-3' >
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://metmuseum.github.io/'>
        metmuseum.com
        </a>
      </div>
    </MDBFooter>
  );
}