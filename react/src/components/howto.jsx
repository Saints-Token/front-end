import { animated, useSpring, Parallax } from 'react-spring';
import { useEffect } from 'react'


const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <span>
        <p style={{ fontSize: 20 }}>{caption}</p>
        <div className={`stripe ${gradient}`} />
        <p>{first}</p>
        <p>{second}</p>
      </span>
    </Parallax.Layer>
  </>
)
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
  return (
    <div id='howto' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>How To Buy</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="container">
          <div className="row step1">
            <div className="col-md-6 col-xs-11">
              <h2> Get a Wallet </h2>
              <p>
                Download MetaMask (a browser extension) or TrustWallet (a phone app) and configure them for the Binance Smart chain. <a href="https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain"> Click here for a tutorial. </a> 
              </p>
            </div>
          </div>
          <div className="row step2">
            <div className="col-md-6 col-xs-11">
              <h2> Transfer BNB </h2>
              <p>
                Buy smart chain BNB tokens on a supporting exchange such as Binance. If you live in the US, use Binance.us to buy non-smart chain BNB tokens and convert them using the Binance Chain Wallet. Afterwards, send them to your MetaMask or TrustWallet.
              </p>
            </div>
          </div>
          <div className="row step3">
            <div className="col-md-6 col-xs-11">
              <h2> Swap BNB to $Saint </h2>
              <p>
                Swap your BNB tokens for $Saint tokens on Pancake Swap. <a href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x503576189Edd9FEb058ad3f17f1E6e9172A11D75"> Click here </a> for a direct swap link or swap using our contract address: 0x503576189Edd9FEb058ad3f17f1E6e9172A11D75.
              </p>
            </div>
          </div>
          <div className="row step4">
            <div className="col-md-6 col-xs-11">
              <h2> Join the Community </h2>
              <p>
                Follow our social media channels and support the cause by sharing $Saint on social media.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
