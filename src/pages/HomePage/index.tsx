import React from 'react';
import styles from './HomePage.module.scss';
import MenuItem from '../../components/MenuItem';
import Directory from '../../containers/Directory';

const HomePage = () => {
    const sections = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            large: false,
            id: 1,
            linkUrl: 'shop/hats',
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            large: false,
            id: 2,
            linkUrl: 'shop/jackets',
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            large: false,
            id: 3,
            linkUrl: 'shop/sneakers',
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            large: true,
            id: 4,
            linkUrl: 'shop/womens',
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            large: true,
            id: 5,
            linkUrl: 'shop/mens',
        },
    ];

    return (
        <div className={styles.homePage}>
            <Directory>
                {sections.map(({ title, id, imageUrl, large, linkUrl }) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        large={large}
                        linkUrl={linkUrl}
                    />
                ))}
            </Directory>
        </div>
    );
};

export default HomePage;
