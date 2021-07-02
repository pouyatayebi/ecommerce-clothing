import React from 'react';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  large: boolean;
}

const MenuItem = ({ title, imageUrl, large = false }: MenuItemProps) => {
  return (
    <div className={`${styles.menuItem} ${large ? styles.large : ''}`}>
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subTitle}>Shop Now</span>
      </div>
    </div>
  );
};

export default MenuItem;
