import React from 'react';
import SHOP_DATA from './shop.data';
import PreviewCollection from '../../containers/PreviewCollection';

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({ id, title, items }) => (
        <PreviewCollection key={id} title={title} items={items} />
      ))}
    </div>
  );
};

export default Shop;
