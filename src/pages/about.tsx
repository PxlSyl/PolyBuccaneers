import React from 'react';
import Image from 'next/image'

const About = () => {

  return (

    <>
      <div style={{
        zIndex: -1,
        position: "fixed",
        width: "100vw",
        height: "100vh"
      }}>
        <Image
          src="/images/8BitsBlueBG.jpg"
          alt="Blue background"
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className='lightcontainer'>
          <h1 className="text-5xl text-bold text-black uppercase inline-flex ">
            About
          </h1>
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <div className='lightcontainer'>
            <Image
              src="/Elements/Team/Pxlsyl.gif"
              height={250}
              width={250}
              alt="avatar"
              style={{
                boxShadow: '0px 5px 11px 2px rgba(0, 0, 0, 0.7)',
                backgroundColor: 'grey',
                borderRadius: '100%'
              }} />
            <div className='space-y-4 ' />
            <p className="text-2xl text-black">
              PxlSyl
            </p>
            <p className="text-lg text-black">
              Artist, pixel art lover & founder.
            </p>
            <p className="text-lg text-black">
              This project was created almost entirely by me, with a little help from the people below.
            </p>
          </div>
          <div className='lightcontainer'>
            <div className='space-y-4 ' />
            <Image
              src="/Elements/Team/Axht.gif"
              height={125}
              width={125}
              alt="avatar"
              style={{
                boxShadow: '0px 5px 11px 2px rgba(0, 0, 0, 0.7)',
                backgroundColor: 'grey',
                borderRadius: '100%'
              }} />
            <div className='space-y-4 ' />
            <p className="text-2xl text-black">
              Ax_ht
            </p>
            <p className="text-lg text-black">
              Advisor
            </p>
          </div>
          <div className='space-y-4 ' />
          <div className='lightcontainer'>
            <Image
              src="/Elements/Team/Fiilia.gif"
              height={125}
              width={125}
              alt="avatar"
              style={{
                boxShadow: '0px 5px 11px 2px rgba(0, 0, 0, 0.7)',
                backgroundColor: 'grey',
                borderRadius: '100%'
              }} />
            <div className='space-y-4 ' />
            <p className="text-2xl text-black">
              Fiilia
            </p>
            <p className="text-lg text-black">
              Designer
            </p>
          </div>
          <div className='space-y-4 ' />
          <div className='lightcontainer'>
            <Image
              src="/Elements/Team/Louhi.gif"
              height={125}
              width={125}
              alt="avatar"
              style={{
                boxShadow: '0px 5px 11px 2px rgba(0, 0, 0, 0.7)',
                backgroundColor: 'grey',
                borderRadius: '100%'
              }} />
            <div className='space-y-4 ' />
            <p className="text-2xl text-black">
              Louhi
            </p>
            <p className="text-lg text-black">
              Discord
            </p >
          </div>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            -Thank you all!-
          </p>
        </div >
      </div >
    </>
  );
}

export default About;