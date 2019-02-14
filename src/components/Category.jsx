import React from 'react';


function Category(){
  return (
    <div>
      <style jsx>{`
          div {
            width: 20%;
            height: 200px;
            border: 1px solid #333;
            float: left;
            margin: 20px;
          }

          p {
            height: 50px;
            background-color: #ff4f00;
            color: #fff;
            position: relative;
            bottom: 0;
          }

        `}</style>
      <p type="submit">Category</p>

    </div>
  );
}

export default Category;
