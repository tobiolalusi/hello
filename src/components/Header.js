import React from 'react'

const Header = ({username}) => {

    return (
        <div className='px-8 py-4 flex justify-between text-white'>
        <img className='h-10' src='/spotify_logo.png' alt='spotify_logo' />
        <h4>{`Wazzup,  ${username}`}</h4>
        </div>
    )
}

export default Header
