import React from 'react';

const Header = ({ Click, data }) => {
    return (
      <div>
      <h1 onClick={() => Click()}>Click Me</h1>
      <h1>{data}</h1>
      </div>
    )
}

export default Header;
