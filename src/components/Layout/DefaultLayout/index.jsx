import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
import React from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles)

const index = ({children}) => {
    return (
        <div className={cx('wrapper')}>
            <Header/>
            <div className={cx('container')}>
                <Sidebar/>
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
};

export default index;