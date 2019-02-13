import React from 'react';
import Top from './Top';
import Main from './Main';



function Header(){
  return (
    <div>
        <style jsx>{`
          div {
            width: 100%;
          }
        `}</style>
      <Top />
      <Main />
    </div>
  );
}

export default Header;
