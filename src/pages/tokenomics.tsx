import React from 'react';
import Image from 'next/image';

export default function Tokenomics() {

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
          priority
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className='lightcontainer'>
          <h1 className="text-5xl text-bold text-black uppercase inline-flex ">
            Tokenomics
          </h1>
        </div>
        <div className='lightcontainer'>
          <p className="text-3xl text-black inline-flex ">
            NFT that rewards you!
          </p>
          <Image
            src='/Elements/Decoration/Pacman.gif'
            alt='buccaneer pixel art'
            height={149} width={297} />
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            Yes, you read that right. And the sooner you buy and hold, the more rewards you get!
          </p>
          <p className="text-lg text-black">
            10% of all sales are automatically preserved by our dedicated smart contract to constitute a kitty.
          </p >
          <div className='space-y-8' />
          <p className="text-lg text-black inline-flex ">
            But in fact, that's not all...
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            Minting price increases by 1 Matic every 500 NFts purchased.
          </p>
          <p className="text-lg text-black">
            Which means for holders : the rewards increases too!
          </p>
          <div className='space-y-4 ' />
          <div className='flex flex-row'>
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>Edition</td>
                    <td>Price</td>
                  </tr>
                  <tr>
                    <td>25-499 </td>
                    <td>1 Matic</td>
                  </tr>
                  <tr>
                    <td>500-999 </td>
                    <td>2 Matic</td>
                  </tr>
                  <tr>
                    <td>1000-1499</td>
                    <td>3 Matic</td>
                  </tr>
                  <tr>
                    <td>1500-1999</td>
                    <td>4 Matic</td>
                  </tr>
                  <tr>
                    <td>2000-2499</td>
                    <td>5 Matic</td>
                  </tr>
                  <tr>
                    <td>2500-2999</td>
                    <td>6 Matic</td>
                  </tr>
                  <tr>
                    <td>3000-3499</td>
                    <td>7 Matic</td>
                  </tr>
                  <tr>
                    <td>3500-3999</td>
                    <td>8 Matic</td>
                  </tr>
                  <tr>
                    <td>4000-4499</td>
                    <td>9 Matic</td>
                  </tr>
                  <tr>
                    <td>4500-4999</td>
                    <td>10 Matic</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='space-y-4' />
            <div>
              <table>
                <tbody>
                  <tr>
                    <td>Edition</td>
                    <td>Price</td>
                  </tr>
                  <tr>
                    <td>5000-5499</td>
                    <td>11 Matic</td>
                  </tr>
                  <tr>
                    <td>5500-5999</td>
                    <td>12 Matic</td>
                  </tr>
                  <tr>
                    <td>6000-6499</td>
                    <td>13 Matic</td>
                  </tr>
                  <tr>
                    <td>6500-6999</td>
                    <td>14 Matic</td>
                  </tr>
                  <tr>
                    <td>7000-6499</td>
                    <td>15 Matic</td>
                  </tr>
                  <tr>
                    <td>7500-7999</td>
                    <td>16 Matic</td>
                  </tr>
                  <tr>
                    <td>8000-8499</td>
                    <td>17 Matic</td>
                  </tr>
                  <tr>
                    <td>8500-8999</td>
                    <td>18 Matic</td>
                  </tr>
                  <tr>
                    <td>9000-9499</td>
                    <td>19 Matic</td>
                  </tr>
                  <tr>
                    <td>9500-10000</td>
                    <td>20 Matic</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            If you hold one or more Buccaneers, you can claim your rewards anytime.
          </p >
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            To get your rewards, you just have to click on the claim box when you connect to this website.
          </p>
          <div className='space-y-4 ' />
          <div className='space-y-8' />
        </div>
        <div className='lightcontainer'>
          <p className="text-3xl text-black uppercase inline-flex ">
            Is there a reveal?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            No need for it. The smart contract is designed so that no one can cheat trying to buy the rarest NFTs.
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            There's also a RandomMint feature included, which makes the NFTs you buy completely unpredictable,
          </p >
          <p className="text-lg text-black">
            and cannot be acquired in the order you can see on IPFS.
          </p >
          <div className='space-y-8' />
        </div>
        <div className='lightcontainer'>
          <p className="text-3xl text-black uppercase inline-flex ">
            Okay nice. But what's next?
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            This is the project of a single artist, so apart from supporting me, promoting my work and giving me a tip by minting...
          </p>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            There is nothing planned, but I'm thinking about it!
          </p >
          <div className='space-y-4 ' />
          <Image
            style={{ cursor: "pointer" }}
            src='/Elements/Decoration/Loading.gif'
            alt='loading pixel art'
            height={100} width={200} />
        </div>
      </div>
    </>
  );
}