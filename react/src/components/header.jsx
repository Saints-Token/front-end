import BackgroundVid from '../assets/saint-nft.mp4'
import {useRef} from 'react'

export const Header = (props) => {

  const contractAdd = useRef(null)

  const onclickHandler = () => {
    navigator.clipboard.writeText(contractAdd.current.value)
  }
  return (

    <header id='header'>
      <video autoPlay muted loop id="myVideo">
        <source src={BackgroundVid} type="video/mp4"/>
      </video>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : 'Loading'}</p>
                <div id="contract-address">
                <textarea className="textarea" style={{'background-color':'white', color:'black', fontSize:'20px', textAlign:'center'}} ref={contractAdd} value="0x503576189Edd9FEb058ad3f17f1E6e9172A11D75" ></textarea>
                <button onClick={onclickHandler}>Copy address</button>
              </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
