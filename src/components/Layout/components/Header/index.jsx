import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

const index = () => {
    return (
        <div>
            <header className={cx('wrapper')}>
                <div className={cx('inner')}>
                    {/* logo
                    search */}
                </div>
            </header>
        </div>
    );
};

export default index;