import React from 'react';
import styles from './CollectionItem.module.scss';

interface IItems {
  name: string;
  imageUrl: string;
  price: number;
}

const CollectionItem = ({ name, price, imageUrl }: IItems) => {
  return (
    <div className={styles.CollectionItem}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.CollectionFooter}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
