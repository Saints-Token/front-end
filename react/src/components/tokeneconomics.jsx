export const Tokeneconomics = (props) => {
  return (
    <div id='token-economics' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Token Economics</h2>
        </div>
        <div className='row'>
          <div className="col-md-6 piechart">
              <div className="row">
                  <canvas id="piechart" width="328" height="360"></canvas>
              </div>
              <div id="legend" className="row">
                      <p className="total-supply"> Total Supply 1,000,000,000,000,000 1 Quadrillion </p>
                      <p className="circulating-supply"> Burned Tokens 400,000,000,000,000 400 Trillion </p>
                      <p className="burned-tokens" > Circulating Supply 600,000,000,000,000 600 Trillion </p>
              </div>
          </div>
          <div  id="protocol" className="col-md-6">
              <div className="reflection">
                  <h2>4%</h2>
                  <h4>Reflection</h4>
                  <p>Redistributed to all existing holders</p>
              </div>
              <div className="lp-aquisition">
                  <h2>4%</h2>
                  <h4>LP acquisition</h4>
                  <p>Split 50/50 half of which is sold by the contract into BNB, while the other half of the SAINT tokens are paired automatically with the previously mentioned BNB and added as a liquidity pair on Pancake Swap.</p>
              </div>
              <div class="charity-wallet">
                  <h2>2%</h2>
                  <h4>Charity Wallet</h4>
                  <p>Funds from charity wallet are donated monthly</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}
