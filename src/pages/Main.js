import React from 'react';
import MainVisual from './MainVisual';
import '../css/Main.scss';

const Main = ({ content }) => {

    return (
        <main className='Main'>
            <MainVisual word={content} />
        </main>
    )
}

export default Main