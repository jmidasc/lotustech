import React, { useEffect } from 'react';
import { useState } from 'react';
import './Header.scss'
export default () => {

  const [changeHeader, setChangeHeader] = useState('-change');

  useEffect(() => {
    window.addEventListener('scroll', (event) => {
      let scrollTop = event.srcElement.body.scrollTop;
      if(scrollTop >= 160)
        setChangeHeader('-change');
      else
        setChangeHeader('');
    })
  }, [])
  return (
    <>
      <div className = {`header-container${changeHeader} fixed-top`}>
        <div className = 'logo'>
        </div>
      </div>     
    </>
  );
};
