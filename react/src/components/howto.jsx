import { useEffect } from 'react'
import TrustWallet from '../assets/trustwallet.png'
import Bnb from '../assets/binance.png'
import Swap from '../assets/swap.png'
import Airdrop from '../assets/air.png'

import Aos from "aos"
import "aos/dist/aos.css"


// function LoopTrue() {
//   const styles = useSpring({
//     loop: true,
//     from: { scale: 'scale(0)'},
//     to: { scale: 'scale(20)'},
//   })

//   return (
//     <animated.div
//       style={{
//         width: 80,
//         height: 80,
//         backgroundColor: '#46e891',
//         borderRadius: 16,
//         ...styles,
//       }}
//     />
//   )
// }



export const Howto = (props) => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div id='howto' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2 data-aos="fade-up" >How To Buy</h2>
        </div>
        <div className="container">
          <div data-aos="fade-left"  className="row step1">
            <div className="col-md-6 col-xs-11">
              <h2> Get a Wallet </h2>
              <p>
                Download MetaMask (a browser extension) or TrustWallet (a phone app) and configure them for the Binance Smart chain. <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"> Click here for a tutorial. </a> 
              </p>
            </div>
            <img style={{'height':'60%'}} src={TrustWallet}></img>
          </div>
          <div data-aos="fade-right" className="row step2">
            <img style={{'height':'60%'}} src={Bnb}></img>
            <div className="col-md-6 col-xs-11">
              <h2> Transfer BNB </h2>
              <p>
                Buy smart chain BNB tokens on a supporting exchange such as Binance. If you live in the US, use Binance.us to buy non-smart chain BNB tokens and convert them using the Binance Chain Wallet. Afterwards, send them to your MetaMask or TrustWallet.
              </p>
            </div>
            
          </div>
          <div data-aos="fade-left" className="row step3">
            <div className="col-md-6 col-xs-11">
              <h2> Swap BNB to $Saint </h2>
              <p>
                Swap your BNB tokens for $Saint tokens on Pancake Swap. <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x503576189Edd9FEb058ad3f17f1E6e9172A11D75"> Click here </a> for a direct swap link or swap using our contract address: 
                {/* 0x503576189Edd9FEb058ad3f17f1E6e9172A11D75. */}
              </p>
            </div>
            <img src={Swap} style={{'height':'60%'}}></img>
          </div>

          <div data-aos="fade-right"  className="row step4">
           
              <img src={Airdrop}  style={{'height':'60%'}}></img>
          
            <div className="col-md-6 col-xs-11">
              <h2> Join the Community </h2>
              <p>
                Follow our social media channels and support the cause by sharing $Saint on social media. Stay tuned, we will be air dropping NFTs to our lucky Saint holders. 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
