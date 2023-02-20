import React from 'react';
import Image from 'next/image'

export default function Footer() {

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className='lightcontainer' style={{ flexDirection: 'row', justifyContent: 'center' }} >
                    <div className='space-y-4 ' />
                    <Image style={{ cursor: "pointer" }}
                        src='/Elements/Logos/Twitter.svg'
                        alt='twitter pixel art'
                        height={50} width={50}
                        onClick={() => window.open("https://twitter.com/pxlsyl", "_blank")} />
                    <div className='space-y-4 ' />
                    <Image style={{ cursor: "pointer" }}
                        src='/Elements/Logos/Github.svg'
                        alt='github pixel art'
                        height={50} width={50}
                        onClick={() => window.open("https://github.com/PxlSyl", "_blank")} />
                    <div className='space-y-4 ' />
                </div>
                <div className='space-y-4 ' />
                <p className="text-lg text-black" >© 2022 - {new Date().getFullYear()} PxlSyl</p>
            </div>
        </>
    )
}