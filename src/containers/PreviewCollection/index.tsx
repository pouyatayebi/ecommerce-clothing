import React from 'react';
import styles from './PreviewCollection.module.scss';
import CollectionItem from '../../components/CollectionItem';

interface IItems {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
}

interface PreviewCollectionProps {
    title: string;
    items: IItems[];
}

const PreviewCollection = ({ title, items }: PreviewCollectionProps) => {
    return (
        <div className={styles.CollectionPreview}>
            <h2 className={styles.title}>{title.toUpperCase()}</h2>
            <div className={styles.preview}>
                {items
                    .filter((item, index) => index < 4)
                    .map((item: IItems) => (
                        <CollectionItem
                            key={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            price={item.price}
                        />
                    ))}
            </div>
        </div>
    );
};

export default PreviewCollection;
