import React, { FC } from 'react';

interface HeaderProps {
  title: string;
  subtitle?: string;
}


const Header: FC<HeaderProps> = ( { title, subtitle } ) => {
  return (
    <>
      <h1>{ title }</h1>
      <h2>{subtitle}</h2>
    </>
  )
}

export default Header