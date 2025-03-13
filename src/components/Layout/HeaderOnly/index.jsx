import Header from '../components/Header';
import React from 'react';

const index = ({children}) => {
    return (
        <div>
            <Header/>
            <div className='container'>
                <div className='content'>{children}</div>
            </div>
        </div>
    );
};

export default index;