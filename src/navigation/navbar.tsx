import React from 'react';
import Link from 'next/link';

export default function Navbar() {

  return (
    <>
      <nav className='navbar'>
        <div className="navbarcontainer navcontainer" >
          <input type="checkbox" name="" id="" />
          <div className="hamburgerlines" >
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className={'menuitems'}>
            <Link href='/'>
              <li>
                Home
              </li>
            </Link>
            <Link href='/tokenomics'>
              <li>
                Tokenomics
              </li>
            </Link>
            <Link href='/rarity'>
              <li>
                Rarity
              </li>
            </Link>
            <Link href='/about'>
              <li>
                About
              </li>
            </Link>
            <Link href='/FAQ' >
              <li>
                FAQ
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
