import React from 'react';
import Image from 'next/image';

export default function Rarity() {

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
        <div className='lightcontainer'>
          <h1 className="text-5xl text-bold text-black uppercase inline-flex ">
            Rarity
          </h1>
        </div>
        <div className='space-y-8 ' />
        <div className='lightcontainer' >
          <p className="text-lg text-black">
            Background:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td>Color</td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Blue</td>
                <td>25%</td>
                <td>2503</td>
                <td>25.03%</td>
              </tr>
              <tr>
                <td>Green</td>
                <td>25%</td>
                <td>2472</td>
                <td>24.72%</td>
              </tr>
              <tr>
                <td>Grey</td>
                <td>25%</td>
                <td>2459</td>
                <td>24.59%</td>
              </tr>
              <tr>
                <td>Red</td>
                <td>25%</td>
                <td>2566</td>
                <td>25.66%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            Shirt:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td>Color</td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Brown</td>
                <td>25%</td>
                <td>2443</td>
                <td>24.43%</td>
              </tr>
              <tr>
                <td>Grey</td>
                <td>25%</td>
                <td>2509</td>
                <td>25.09%</td>
              </tr>
              <tr>
                <td>Rose</td>
                <td>25%</td>
                <td>2519</td>
                <td>25.19%</td>
              </tr>
              <tr>
                <td>Yellow</td>
                <td>25%</td>
                <td>2529</td>
                <td>25.29%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            Jacket:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Captain's coat</td>
                <td>20%</td>
                <td>2011</td>
                <td>20.11%</td>
              </tr>
              <tr>
                <td>Straps</td>
                <td>40%</td>
                <td>3986</td>
                <td>39.86%</td>
              </tr>
              <tr>
                <td>Stripes</td>
                <td>40%</td>
                <td>4003</td>
                <td>40.03%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            Head:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td>Type</td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Captain</td>
                <td>10%</td>
                <td>1030</td>
                <td>10.30%</td>
              </tr>
              <tr>
                <td>Captain's wife</td>
                <td>12%</td>
                <td>1215</td>
                <td>12.15%</td>
              </tr>
              <tr>
                <td>Cooker</td>
                <td>12%</td>
                <td>1196</td>
                <td>11.96%</td>
              </tr>
              <tr>
                <td>Old sailor</td>
                <td>13%</td>
                <td>1273</td>
                <td>12.73%</td>
              </tr>
              <tr>
                <td>Sailor girl</td>
                <td>13%</td>
                <td>1318</td>
                <td>13.18%</td>
              </tr>
              <tr>
                <td>Sailor</td>
                <td>13%</td>
                <td>1278</td>
                <td>12.78%</td>
              </tr>
              <tr>
                <td>Ghost girl</td>
                <td>6%</td>
                <td>622</td>
                <td>6.22%</td>
              </tr>
              <tr>
                <td>Ghost</td>
                <td>6%</td>
                <td>595</td>
                <td>5.95%</td>
              </tr>
              <tr>
                <td>Octopus</td>
                <td>6%</td>
                <td>579</td>
                <td>5.79%</td>
              </tr>
              <tr>
                <td>Skull</td>
                <td>6%</td>
                <td>598</td>
                <td>5.98%</td>
              </tr>
              <tr>
                <td>Doge</td>
                <td>1%</td>
                <td>101</td>
                <td>1.01%</td>
              </tr>
              <tr>
                <td>Demon</td>
                <td>1%</td>
                <td>91</td>
                <td>0.91%</td>
              </tr>
              <tr>
                <td>Pepe The Frog</td>
                <td>1%</td>
                <td>104</td>
                <td>1.04%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            Hat:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Bandana</td>
                <td>35%</td>
                <td>3351</td>
                <td>33.51%</td>
              </tr>
              <tr>
                <td>Feather Hat</td>
                <td>35%</td>
                <td>3342</td>
                <td>34.32%</td>
              </tr>
              <tr>
                <td>Captain's Hat</td>
                <td>10%</td>
                <td>1047</td>
                <td>10.47%</td>
              </tr>
              <tr>
                <td>Parrot Perch's Hat</td>
                <td>5%</td>
                <td>510</td>
                <td>5.10%</td>
              </tr>
              <tr>
                <td>Angel Halo</td>
                <td>2%</td>
                <td>216</td>
                <td>2.16%</td>
              </tr>
              <tr>
                <td>Demon Halo</td>
                <td>2%</td>
                <td>190</td>
                <td>1.90%</td>
              </tr>
              <tr>
                <td>General's Hat</td>
                <td>2%</td>
                <td>214</td>
                <td>2.14%</td>
              </tr>
              <tr>
                <td>General's Viking Hat </td>
                <td>2%</td>
                <td>205</td>
                <td>2.05%</td>
              </tr>
              <tr>
                <td>King's Crown</td>
                <td>2%</td>
                <td>174</td>
                <td>1.74%</td>
              </tr>
              <tr>
                <td>Mage's Hat</td>
                <td>2%</td>
                <td>172</td>
                <td>1.72%</td>
              </tr>
              <tr>
                <td>Viking Chieftain</td>
                <td>2%</td>
                <td>193</td>
                <td>1.93%</td>
              </tr>
              <tr>
                <td>Witcher's Hat</td>
                <td>2%</td>
                <td>205</td>
                <td>2.05%</td>
              </tr>
              <tr>
                <td>Funky Helmet</td>
                <td>1%</td>
                <td>91</td>
                <td>0.91%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            Eyes:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td>Color</td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Blue</td>
                <td>25%</td>
                <td>2495</td>
                <td>24.95%</td>
              </tr>
              <tr>
                <td>Brown</td>
                <td>25%</td>
                <td>2492</td>
                <td>24.92%</td>
              </tr>
              <tr>
                <td>Green</td>
                <td>25%</td>
                <td>2485</td>
                <td>24.85%</td>
              </tr>
              <tr>
                <td>Yellow</td>
                <td>25%</td>
                <td>2528</td>
                <td>25.28%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            Eyes accessories:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td>Item</td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>black Eye Patch</td>
                <td>30%</td>
                <td>3034</td>
                <td>30.34%</td>
              </tr>
              <tr>
                <td>Red Eye Patch</td>
                <td>20%</td>
                <td>1917</td>
                <td>19.17%</td>
              </tr>
              <tr>
                <td>Eyeglasses</td>
                <td>15%</td>
                <td>1470</td>
                <td>14.70%</td>
              </tr>
              <tr>
                <td>None</td>
                <td>35%</td>
                <td>3579</td>
                <td>35.79%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-8 ' />
          <p className="text-lg text-black">
            Left arm:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Fist</td>
                <td>50%</td>
                <td>4958</td>
                <td>49.58%</td>
              </tr>
              <tr>
                <td>Hook</td>
                <td>12%</td>
                <td>1225</td>
                <td>12.25%</td>
              </tr>
              <tr>
                <td>Sword</td>
                <td>8%</td>
                <td>780</td>
                <td>7.80%</td>
              </tr>
              <tr>
                <td>Axe</td>
                <td>8%</td>
                <td>803</td>
                <td>8.03%</td>
              </tr>
              <tr>
                <td>black Pistol</td>
                <td>7%</td>
                <td>723</td>
                <td>7.23%</td>
              </tr>
              <tr>
                <td>Golden Hook</td>
                <td>6%</td>
                <td>594</td>
                <td>5.94%</td>
              </tr>
              <tr>
                <td>Golden Sword</td>
                <td>3%</td>
                <td>313</td>
                <td>3.13%</td>
              </tr>
              <tr>
                <td>Golden Axe</td>
                <td>3%</td>
                <td>306</td>
                <td>3.06%</td>
              </tr>
              <tr>
                <td>Golden Pistol</td>
                <td>3%</td>
                <td>298</td>
                <td>2.98%</td>
              </tr>
            </tbody>
          </table>
          <div className='space-y-4 ' />
          <p className="text-lg text-black">
            Right arm:
          </p>
          <div className='space-y-4 ' />
          <table>
            <tbody>
              <tr>
                <td></td>
                <td>Chance</td>
                <td>Occurrence</td>
                <td>Percentage</td>
              </tr>
              <tr>
                <td>Fist</td>
                <td>50%</td>
                <td>5008</td>
                <td>50.08%</td>
              </tr>
              <tr>
                <td>Hook</td>
                <td>44%</td>
                <td>4401</td>
                <td>44.01%</td>
              </tr>
              <tr>
                <td>Golden Hook</td>
                <td>6%</td>
                <td>591</td>
                <td>5.91%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
