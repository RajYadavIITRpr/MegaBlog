import React from 'react'
import logoimg from '../logoimg.png';

function Logo({width = '100px'}) {
  return (
    <img className='transition duration-300 ease-in-out hover:scale-110' rounded="true" width={50} height={50} src={logoimg} alt="BigCo Inc. logo"/>
  )
}

export default Logo