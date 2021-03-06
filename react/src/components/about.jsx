import {useRef, useEffect} from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
export const About = (props) => {
  useEffect(()=>{
    Aos.init({duration: 2000});
  },[])

  return (
    <div id='about' class=" text-center">
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-md-8'>
            <div className='about-text'>
              <h2 class="jumbotron-heading">Why Saint ?</h2>
              <p data-aos="fade-up" class="lead">There are more than 2.2 billion children in the world. Many of them are stricken by poverty, sickness, and/or abuse. Most of the problems faced by children can be mitigated through research, product development, and volunteerism, and there are many great organizations working to make an impact, however available funds, or the lack thereof, is an issue. Saint Token is on a mission to change this!</p>
              <p data-aos="fade-up"  class="lead">We are consistently donating funds every Friday</p>
              
              <a
                
                href='https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x503576189Edd9FEb058ad3f17f1E6e9172A11D75'
                className='btn btn-custom1 btn-lg '
              >
                  Buy $Saint
              </a>
              <a
                
                href='https://charts.bogged.finance/?token=0x503576189Edd9FEb058ad3f17f1E6e9172A11D75'
                className='btn btn-custom2 btn-lg '
              >
                Live Chart
              </a>
              <a
                
                href='https://t.me/SaintTokenChat'
                className='btn btn-custom3 btn-lg '
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
