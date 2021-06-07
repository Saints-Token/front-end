import Logo from '../assets/saintlogo.png'
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <img src={Logo} alt="" width="90px"/>
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#token-economics' className='page-scroll'>
                Token Economics
              </a>
            </li>
            <li>
              <a href='#howto' className='page-scroll'>
                How to Buy
              </a>
            </li>
            <li>
              <a href='#whitepaper' className='page-scroll'>
                Whitepaper
              </a>
            </li>
            <li>
              <a href='#roadmap' className='page-scroll'>
                Roadmap
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
