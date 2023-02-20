import Head from 'next/head'
import Image from 'next/image'

import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

export default function Home() {

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  const dispatch = useDispatch();
  const blockchain = useSelector((state) => state.blockchain);
  const data = useSelector((state) => state.data);
  const [claimingRewards, setClaimingRewards] = useState(false);
  const [availableRewards, setAvailableRewards] = useState(0);
  const [claimingNft, setClaimingNft] = useState(false);
  const [feedback, setFeedback] = useState(`Excluding gas fees.`);
  const [feedback2, setFeedback2] = useState(``);
  const [mintAmount, setMintAmount] = useState(1);
  const [mintCost, setMintCost] = useState(0);
  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "",
    SCAN_LINK: "",
    NETWORK: {
      NAME: "",
      SYMBOL: "",
      ID: 0,
    },
    NFT_NAME: "",
    SYMBOL: "",
    MAX_SUPPLY: 1,
    WEI_COST: 0,
    DISPLAY_COST: 0,
    GAS_LIMIT: 0,
    GAS_LIMIT2: 0,
    MARKETPLACE: "",
    MARKETPLACE_LINK: "",
    SHOW_BACKGROUND: false,
  });

  const claimNFTs = (price) => {
    let cost = price;
    let gasLimit = CONFIG.GAS_LIMIT;
    let totalCostWei = String(cost * mintAmount);
    let totalGasLimit = String(gasLimit * mintAmount);

    console.log("Cost: ", totalCostWei);
    console.log("Gas limit: ", totalGasLimit);
    setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
    setClaimingNft(true);
    blockchain.smartContract.methods
      .mint(mintAmount)
      .send({
        gasLimit: String(totalGasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: totalCostWei,
      })
      .once("error", (err) => {
        console.log(err);
        if (err.code == 4001) {
          setFeedback("Error: you rejected the transaction.");
        } else {
          setFeedback("Sorry, something went wrong please try again later.");
        }
        setClaimingNft(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback(
          `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
        );
        setClaimingNft(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  const decrementMintAmount = () => {
    let newMintAmount = mintAmount - 1;
    if (newMintAmount < 1) {
      newMintAmount = 1;
    }
    setMintAmount(newMintAmount);
  };

  const incrementMintAmount = () => {
    let newMintAmount = mintAmount + 1;
    if (newMintAmount > 20) {
      newMintAmount = 20;
    }
    setMintAmount(newMintAmount);
  };

  const getData = () => {
    if (blockchain.account !== "" && blockchain.smartContract !== null) {
      getMintCost();
      getavailableRewards();
      dispatch(fetchData(blockchain.account));
    }
  };

  const getConfig = async () => {
    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const config = await configResponse.json();
    SET_CONFIG(config);
  };

  const getMintCost = async () => {
    await blockchain.smartContract.methods.calculatePrice().call().then((res) => { setMintCost(res) });
  }

  const getavailableRewards = async () => {
    await blockchain.smartContract.methods.getReflectionBalances(blockchain.account).call().then((res) => { setAvailableRewards(res) });
  }

  useEffect(() => {
    getConfig();
  }, []);

  useEffect(() => {
    getData();
  }, [blockchain.account]);

  const claimRewardz = () => {

    let rewards = String(availableRewards / (10 ** 18))
    let gasLimit = CONFIG.GAS_LIMIT2;

    console.log("Rewards: ", rewards)
    console.log("Cost: ", 0);
    console.log("Gas limit: ", gasLimit);
    setFeedback2(`Claiming your rewards...`);
    setClaimingRewards(true);
    blockchain.smartContract.methods
      .claimRewards()
      .send({
        gasLimit: String(gasLimit),
        to: CONFIG.CONTRACT_ADDRESS,
        from: blockchain.account,
        value: 0,
      })
      .once("error", (err) => {
        console.log(err);
        if (err.code == 4001) {
          setFeedback2("Error: you rejected the transaction.");
        } else {
          setFeedback2("Sorry, something went wrong please try again later.");
        }
        setClaimingRewards(false);
      })
      .then((receipt) => {
        console.log(receipt);
        setFeedback2(
          `Rewards successfully claimed.`
        );
        setClaimingRewards(false);
        dispatch(fetchData(blockchain.account));
      });
  };

  return <>
    <Head>
      <title>PolyBuccaneers</title>
      <meta name="Buccaneers NFT" content="Buccaneers" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div style={{
      zIndex: -1,
      position: "fixed",
      width: "100vw",
      height: "100vh"
    }}>
      <Image
        src="/images/BG.png"
        alt="Beach pixel art"
        priority
        fill
        style={{ objectFit: 'cover' }}
      />
    </div>
    <div className="flex flex-col justify-center items-center pt-12">
      <div className="container" >
        <Image
          alt='logo'
          src={"/images/Logo.gif"}
          width={450} height={115}
        />
        <div className='space-y-4 ' />
        <animated.div
          onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
          onMouseLeave={() => set({ xys: [0, 0, 1] })}
          style={{ transform: props.xys.to(trans) }}
          className="flex flex-col justify-center items-center"
        >
          <div>
            <Image
              src="/images/1.gif"
              height={257}
              width={257}
              alt="NFT Display Image"
              style={{
                boxShadow: '0px 5px 11px 2px rgba(0, 0, 0, 0.7)',
                backgroundColor: 'grey',
                borderRadius: '100%'
              }}
            />
          </div>
          <div className='space-y-4 ' />
        </animated.div>
        <h1 className="text-5xl text-white uppercase inline-flex ">
          -Buccaneers-
        </h1>
        <p className="text-2xl text-white">{`Claimed: ${data.totalSupply}/${CONFIG.MAX_SUPPLY}`}</p>
        <div className='space-y-8' />
        <div className='lightcontainer' >
          <div className='space-y-4 ' />
          {Number(data.totalSupply) >= CONFIG.MAX_SUPPLY ? (
            <>
              <p className="text-lg text-white">
                The sale has ended.
              </p>
              <p className="text-lg text-white">
                You can still find {CONFIG.NFT_NAME} on
              </p>
              <div className='space-y-4 ' />
              <a target={"_blank"} href={CONFIG.MARKETPLACE_LINK} rel="noopener noreferrer">
                {CONFIG.MARKETPLACE}
              </a>
            </>
          ) : (
            <>
              <div className='space-y-4 ' />
              {blockchain.account === "" ||
                blockchain.smartContract === null ? (
                <div className='lightcontainer'>
                  <p className="text-lg text-white inline-flex ">
                    Connect to the {CONFIG.NETWORK.NAME} network
                  </p>
                  <div className='space-y-4' />
                  <button className="bg-gray-200 hover:bg-white text-lg text-black py-2 px-8 border-b-4 border-gray-500 hover:text-gray-500  rounded"
                    onClick={(e) => {
                      e.preventDefault();
                      dispatch(connect());
                      getData();
                    }}
                  >
                    Connect
                  </button>
                  {blockchain.errorMsg !== "" ? (
                    <>
                      <div className='space-y-4 ' />
                      <p className="text-lg text-white ">
                        {blockchain.errorMsg}
                      </p>
                    </>
                  ) : null}
                </div>
              ) : (
                <>
                  <p className="text-lg text-white">
                    1 {CONFIG.SYMBOL} costs {mintCost / (10 ** 18)}{" "}
                    {CONFIG.NETWORK.SYMBOL}.
                  </p>
                  <div className='space-y-4 ' />
                  <p className="text-lg text-white">
                    {feedback}
                  </p>
                  <div className='space-y-4' />
                  <div className='lightcontainer' style={{ flexDirection: 'row', justifyContent: 'center' }} >
                    <Image
                      src='/Elements/Decoration/Rudder.png'
                      alt='rudder pixel art'
                      height={50} width={50} />
                    <div className='space-y-4' />
                    <button className="bg-yellow-200 hover:bg-white text-lg text-black py-2 px-8 border-b-4 border-yellow-700 hover:text-yellow-700  rounded"
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        let p = async () => {
                          await blockchain.smartContract.methods.calculatePrice().call().then((res) => { claimNFTs(res) });
                        }
                        p()
                        //claimNFTs();
                        getData();
                      }}
                    >
                      Mint
                    </button>
                    <div className='space-y-4' />
                    <Image
                      src='/Elements/Decoration/Rudder.png'
                      alt='rudder pixel art'
                      height={50} width={50} />
                  </div>
                  <div className='space-y-4' />
                  <div className='container' style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <button
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        decrementMintAmount();
                      }}
                      className="text-lg text-black px-2 hover:rounded-full hover:shadow hover:bg-white">
                      -
                    </button>
                    <div className='space-x-4' />
                    <p className="text-lg text-white uppercase inline-flex ">
                      {mintAmount}
                    </p>
                    <div className='space-x-4' />
                    <button
                      disabled={claimingNft ? 1 : 0}
                      onClick={(e) => {
                        e.preventDefault();
                        incrementMintAmount();
                      }}
                      className="text-lg text-black px-2 hover:rounded-full hover:shadow hover:bg-white">
                      +
                    </button>
                  </div>
                  <div className='space-x-4 ' />
                  <div className='lightcontainer'>
                    <Image
                      src='/Elements/Decoration/Anchor.png'
                      alt='anchor pixel art'
                      height={50} width={50} />
                  </div>
                </>
              )}
            </>
          )}
          <div className='space-y-4' />
        </div>
        <div className='space-y-8' />
        <div className='lightcontainer'>
          <div className='lightcontainer'>
            {blockchain.account === "" ||
              blockchain.smartContract === null ? (
              <div>
                <p className="text-lg text-white uppercase inline-flex ">
                  -infos : portfolio project-
                </p>
                <div className='space-y-4 ' />
                <p className="text-lg text-white inline-flex ">
                  But you can mint to support my art and my projects!
                </p>
                <p className="text-lg text-white  ">
                  -The price increases every 500 NFT minted-</p>
                <p className="text-lg text-white  ">
                  -10% of all sales redistributed to holders!-</p>
                <p className="text-lg text-white  ">
                  -Connect to claim your rewards-</p>
                <p className="text-lg text-white  ">
                  -or-</p>
                <p className="text-lg text-white  ">
                  -Read more in the tokenomics tab-</p>
                <div className='space-y-4 ' />
                <p className="text-2xl text-blue-600 " >
                  <a target="_blank" rel="noopener noreferrer" href="https://opensea.io/collection/polybuccaneers">\OPENSEA/</a>
                </p>
              </div>
            ) : (
              <>
                <div>
                  <div className='flex flex-col items-center'>
                    <div className='space-y-4 ' />
                    <p className="text-lg text-white uppercase inline-flex ">
                      - REWARDS BOX-
                    </p>
                    <div className='space-y-4 ' />
                    <div className='flex flex-row' >
                      <div className='space-x-4 ' />
                      <p className="text-lg text-black px-2 rounded-full border-4 border-yellow-400 shadow bg-yellow-100">$ </p>
                      <div className='space-x-4 ' />
                      <button className="bg-yellow-200 hover:bg-white text-lg text-black px-8 border-b-4 border-yellow-700 hover:text-yellow-700  rounded"
                        disabled={claimingRewards ? 1 : 0}
                        onClick={(e) => {
                          e.preventDefault();
                          claimRewardz();
                          getData();
                        }}>
                        Claim
                      </button>
                      <div className='space-x-4 ' />
                      <p className="text-lg text-black px-2 rounded-full border-4 border-yellow-400 shadow bg-yellow-100">$ </p>
                      <div className='space-x-4 ' />
                    </div>
                    <div className='space-y-4 ' />
                    <p className="text-lg text-white inline-flex ">
                      You have {availableRewards / (10 ** 18)}{" "} {CONFIG.NETWORK.SYMBOL} to claim.
                    </p>
                    <div className='space-y-4 ' />
                    <p className="text-lg text-white inline-flex ">
                      {feedback2}
                    </p>
                    <div className='space-y-4 ' />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  </>
}
