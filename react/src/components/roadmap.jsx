import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
export const Roadmap = (props) => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
  return (
    <div id='roadmap' className='text-center'>
        <div class="container">
          <div  className='section-title text-center'>
            <h2 data-aos="fade-up"  >Roadmap</h2>
          </div>
          <div class="main-timeline">
            <div class="timeline">
              <div class="icon"></div>
              <div class="date-content">
                  <div class="date-outer">
                      <span class="date">
                              <span class="month">May</span>
                      <span class="year">2021</span>
                      </span>
                  </div>
              </div>
              <div data-aos="fade-up" class="timeline-content">
                  <h5 class="title">Genesis</h5>
                  <ul class="description text-muted">
                      <li>
                          Token Deployed, 40% Burned, LP locked
                      </li>
                      <li>
                          Website and logo revamped
                      </li>
                      <li>
                          Team Doxxed
                      </li>
                      <li>
                          First Donation - $25,000 to St.Jude Children's Hospital 
                      </li>
                  </ul>
              </div>
            </div>

            <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                                <span class="month">June</span>
                        <span class="year">2021</span>
                        </span>
                    </div>
                </div>
                <div  data-aos="fade-up" class="timeline-content">
                    <h5 class="title">Building our community</h5>
                    <ul class="description text-muted">
                        <li>
                            NFT Airdrops
                        </li>
                        <li>
                            Merchandise giveaway
                        </li>
                        <li>
                            Donated 100k
                        </li>
                        <li>
                            CoinGecko listing
                        </li>
                        <li>
                            Blockfolio listing
                        </li>
                        <li>
                            $100 million marketcap
                        </li>
                    </ul>
                </div>
            </div>

            <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                                <span class="month">July</span>
                        <span class="year">2021</span>
                        </span>
                    </div>
                </div>
                <div data-aos="fade-up" class="timeline-content">
                    <h5 class="title">The Launch</h5>
                    <ul class="description text-muted">
                        <li>
                            Donate 250k 
                        </li>
                        <li>
                            DApp hackathon
                        </li>
                        <li>
                            $500 million marketcap
                        </li>
                        <li>
                            celebrity partnerships
                        </li>
                        <li>
                            listing on major exchanges
                        </li>
                    </ul>
                </div>
            </div>

            <div class="timeline">
                <div class="icon"></div>
                <div class="date-content">
                    <div class="date-outer">
                        <span class="date">
                                <span class="month">August</span>
                        <span class="year">2021</span>
                        </span>
                    </div>
                </div>
                <div data-aos="fade-up" class="timeline-content">
                    <h5 class="title">An Autonomous organization</h5>
                    <ul class="description text-muted">
                        <li>
                            $500k Donated
                        </li>
                        <li>
                            1 Billion dollar marketcap
                        </li>
                    </ul>
                </div>
          </div>
        </div>
      </div>
    </div>
  )
}
