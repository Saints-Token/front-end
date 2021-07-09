import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Tokeneconomics } from './components/tokeneconomics'
import { About } from './components/about'
import { Roadmap } from './components/roadmap'
import { Howto } from './components/howto'
import { Whitepaper } from './components/whitepaper'
import { Team } from './components/team'
import { Footer } from './components/footer'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import { Nft } from './components/nft'




export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
    <div id="main-wrapper">
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Tokeneconomics data={landingPageData.Features} />
      <Howto/>
      {/* <Nft/> */}
      <Whitepaper />
      <Roadmap/>
      <Team data={landingPageData.Team} />
      <Footer data={landingPageData.Contact} />
    </div>
  )
}

export default App
