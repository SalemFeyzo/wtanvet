import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSearchResults = (props) => {
  const { name, id } = props.product;
  let path = '/product/' + name + '/' + id;
  path = path.split(' ').join('_');
  return (
    <div>
      <Link to={path}>
        <p>{name}</p>
      </Link>
    </div>
  );
};

export default HeaderSearchResults;
