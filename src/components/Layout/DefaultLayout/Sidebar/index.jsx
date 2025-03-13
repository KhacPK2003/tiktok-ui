import React from 'react';
import styles from './Sidebar.module.scss'
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const index = () => {
    return (
        <div>
            <aside className={cx('wrapper')}>
            <h2>Sidebar</h2>
            </aside>
        </div>
    );
};

export default index;