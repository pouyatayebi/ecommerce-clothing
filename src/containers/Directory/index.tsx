import React from 'react';
import styles from './Directory.module.scss';

interface DirectoryProps {
    children: React.ReactNode;
}

const Directory = ({ children }: DirectoryProps) => {
    return <div className={styles.directoryMenu}>{children}</div>;
};

export default Directory;
