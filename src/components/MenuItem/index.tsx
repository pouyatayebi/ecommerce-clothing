import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './MenuItem.module.scss';

interface MenuItemProps {
  title: string;
  imageUrl: string;
  large: boolean;
  linkUrl: string;
}

const MenuItem = ({
  title,
  imageUrl,
  large = false,
  linkUrl,
}: MenuItemProps) => {
  const history = useHistory();
  const handleClick = () => {
    history.push(linkUrl);
  };
  return (
    <button
      type="button"
      className={`${styles.menuItem} ${large ? styles.large : ''}`}
      onClick={handleClick}
    >
      <div
        className={styles.backgroundImage}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <span className={styles.subTitle}>Shop Now</span>
      </div>
    </button>
  );
};

export default MenuItem;
