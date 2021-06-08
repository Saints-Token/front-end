import Alex from '../assets/alex.jpeg'
import Subaiyal from '../assets/subaiyal.jpeg'
import Ray from '../assets/ray.jpeg'
import Austin from '../assets/austin.jpeg'
import Micheal from '../assets/micheal.jpeg'
import Tiernan from '../assets/tiernan.jpeg'
import Josh from '../assets/josh.jpg'

export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>

        <div className='section-title'>
          <h2>Our Team</h2>
        </div>

        <div className="container bootdey">
          <div className="row">
            <div className="container ">
              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                  <div class="team text-center rounded p-3 py-4">
                      <img src={Alex} class="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                      <div class="content mt-3">
                          <h4 class="title mb-0">Alex</h4>
                          <small class="text-muted">Founder / Data Scientist</small>
                          <ul class="list-unstyled mt-3 social-icon social mb-0">  
                              <li class="list-inline-item"><a href="https://www.linkedin.com/in/alex-liddle-a8099287/" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                  <div class="team text-center rounded p-3 py-4">
                      <img src={Ray} class="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                      <div class="content mt-3">
                          <h4 class="title mb-0">Ray</h4>
                          <small class="text-muted">Podcaster / Project Manager</small>
                          <ul class="list-unstyled mt-3 social-icon social mb-0">
                              <li class="list-inline-item"><a href="https://www.linkedin.com/in/socialray/" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                  <div class="team text-center rounded p-3 py-4">
                      <img src={Austin} class="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                      <div class="content mt-3">
                          <h4 class="title mb-0">Austin</h4>
                          <small class="text-muted">Sales and Marketting</small>
                          <ul class="list-unstyled mt-3 social-icon social mb-0">
                              <li class="list-inline-item"><a href="https://www.linkedin.com/in/austinensz/" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                  <div class="team text-center rounded p-3 py-4">
                      <img src={Subaiyal} class="img-fluid avatar avatar-medium shadow rounded-pill" alt=""/>
                      <div class="content mt-3">
                          <h4 class="title mb-0">Subaiyal</h4>
                          <small class="text-muted">Web Developer</small>
                          <ul class="list-unstyled mt-3 social-icon social mb-0">
                              <li class="list-inline-item"><a href="https://www.linkedin.com/in/subaiyalshk/" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                  <div class="team text-center rounded p-3 py-4">
                      <img src={Micheal} class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                      <div class="content mt-3">
                          <h4 class="title mb-0">Micheal</h4>
                          <small class="text-muted">Vice Chair of board</small>
                          <ul class="list-unstyled mt-3 social-icon social mb-0">
                              <li class="list-inline-item"><a href="https://www.linkedin.com/in/michael-jay-b6797b91" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>
              
              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                  <div class="team text-center rounded p-3 py-4">
                      <img src={Tiernan} class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                      <div class="content mt-3">
                          <h4 class="title mb-0">Tiernan</h4>
                          <small class="text-muted">Designer / NFT Artist</small>
                          <ul class="list-unstyled mt-3 social-icon social mb-0">
                              <li class="list-inline-item"><a href="https://www.linkedin.com/in/tiernan-bailey-09925b213/" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div class="col-lg-3 col-md-6 col-12 mt-4 pt-2">
                  <div class="team text-center rounded p-3 py-4">
                      <img src={Josh} class="img-fluid avatar avatar-medium shadow rounded-pill" alt="" />
                      <div class="content mt-3">
                          <h4 class="title mb-0">Josh</h4>
                          <small class="text-muted">Youtube Influencer / Marketting</small>
                          <ul class="list-unstyled mt-3 social-icon social mb-0">
                              <li class="list-inline-item"><a href="https://www.linkedin.com/in/josh-srtoud-271673213/" class="rounded"><i class="mdi mdi-linkedin" title="Linkedin"></i></a></li>
                          </ul>
                      </div>
                  </div>
              </div>

            </div>        
          </div>
        </div>
      </div>
    </div>
  )
}
