import React from 'react';
import MainVisual from './MainVisual';
import Customer from './Customer';
import '../css/Main.scss';

const Main = ({ content }) => {

    return (
        <main className='Main'>
            <MainVisual word={content} />
            <Customer />
        </main>
    )
}

export default Main