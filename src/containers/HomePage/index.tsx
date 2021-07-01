import React from 'react';
import styles from './HomePage.module.scss';

const HomePage = () => {
  const titles = ['HATS', 'JACKETs', 'SNEAKERS', 'WOMENS', 'MENS'];

  return (
    <div className={styles.homePage}>
      <div className={styles.directoryMenu}>
        {titles.map((title) => (
          <div className={styles.menuItem}>
            <div className={styles.content}>
              <h1 className={styles.title}>{title}</h1>
              <span className={styles.subTitle}>Shop Now</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
