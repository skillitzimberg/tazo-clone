import React from 'react';


function Button(){
  return (
    <div>
        <style jsx>{`
          button {
            width: 100px;
            height: 40px;
            background-color: #ff4f00;
            color: #fff;
          }
        `}</style>
      <button type="submit">Button</button>
    </div>
  );
}

export default Button;
