import React from 'react';
import Image from 'next/image';

function changeButtonBackground(e: any) {
  e.target.style.background = '#9B98A7';
}

function restoreButtonBackground(e: any) {
  e.target.style.background = '#FFFFFF80';
}

const FAQ = () => {
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
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col justify-center items-center ">
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <h1 className="text-5xl text-bold text-black uppercase inline-flex ">
            Frequently Asked Questions
          </h1>
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <p className="text-3xl text-black">
            What’s an NFT?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            An NFT stands for “Non-fungible token” and is a fancy way of saying it’s a unique,
            one of a kind digital item that users can buy, own, and trade.
          </p>
          <p className="text-lg text-black">
            Some NFTs main function are to be digital art and look cool,
            some offer additional utility like exclusive access to websites or participation in an event,
            or gaming items in Play to Earn games, trading cards games etc.
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            Think of it like a rare piece of art that can also act as a “members” card.
          </p>
          <div className='space-y-4 ' />
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <p className="text-3xl text-black">
            What is Metamask?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            Metamask is a crypto wallet that can store your Matic or other cryptocurrencies,
            and is needed to purchase and mint a PolyBuccaneer.
            Having a wallet gives you an Ethereum address (i.e. 0xABCD….1234), this is where your NFT will be stored.
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            Learn more about Metamask and how easy it is to use over here!
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            <Image
              style={{ cursor: "pointer" }}
              src='/Elements/Buttons/Metamask/Metamask.png'
              height={50} width={140}
              alt='metamask button'
              onMouseOver={changeButtonBackground}
              onMouseLeave={restoreButtonBackground}
              onClick={() => window.open("https://metamask.io/", "_blank")} />
          </p>
          <div className='space-y-4 ' />
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <p className="text-3xl text-black" >
            What is Buccaneers?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black" >
            Buccaneers is a collection of 10,000 awesome pirate-themed Pixel Art GIFs. Each one is unique!
          </p>
          <p className="text-lg text-black" >
            The layers were carefully designed and selected, and then the GIFs generated randomly with an algorithmic code.
          </p>
          <div className='space-y-4 ' />
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <p className="text-3xl text-black">
            How many Buccaneers can I purchase?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            The number of mints is limited to 20 per address.
          </p>
          <div className='space-y-4 ' />
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <p className="text-3xl text-black" >
            Where does my NFT go after I purchase a Buccaneer?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black" >
            Your Buccaneer will appear in whatever address, or connected wallet you used to purchase the Buccaneer.
          </p>
          <p className="text-lg text-black" >
            You can see your Buccaneer on Opensea.
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            <Image
              style={{ cursor: "pointer" }}
              src='/Elements/Buttons/Opensea/Opensea.png' height={50} width={125}
              alt='opensea button'
              onMouseOver={changeButtonBackground}
              onMouseLeave={restoreButtonBackground}
              onClick={() => window.open("https://opensea.io/collection/polybuccaneers", "_blank")} />
          </p>
          <div className='space-y-4 ' />
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer'>
          <p className="text-3xl text-black">
            Great! How do I get involved?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            Feel free to contact me through my social medias!
          </p>
        </div>
      </div>
    </>
  );
}

export default FAQ;