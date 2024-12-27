import twitterLogo from '../assets/twitter.png'
import whatsAppLogo from '../assets/whatsapp.png'
import youtubeLogo from '../assets/youtube.png'
import facebookLogo from '../assets/communication.png'


export default function Footer(){
    return(
        <div className="container">
  <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-1 my-1 border-top mx-0">
    <div className="col mb-3">
      <a href="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"></svg>
      </a>
      <p className="text-body-secondary">© 2024</p>
    </div>

  

    <div className="col mb-3">
      <h5>Section</h5>
      <ul className="nav flex-column">
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
      </ul>
    </div>

    <div className="col mb-3">
      <h5>Contact Me</h5>
      <ul className="nav flex-column">
        
        <li className="nav-item mb-2"><a href="https://x.com/miller_grt02?s=21" className="nav-link p-0 text-body-secondary">
        <img
            src={twitterLogo}
            alt='miller'
            height="30"
            width="auto"
            className='rounded-circle'/>
        </a></li>
        <li className="nav-item mb-2"><a href="https://wa.link/p9d211" className="nav-link p-0 text-body-secondary">
        <img
            src={whatsAppLogo}
            alt='miller'
            height="30"
            width="auto"
            className='rounded-circle'/>
            </a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">
        <img
            src={youtubeLogo}
            alt='miller'
            height="30"
            width="auto"
            className='rounded-circle'/>
            </a></li>
        <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">
        <img
            src={facebookLogo}
            alt='miller'
            height="30"
            width="auto"
            className='rounded-circle'/>
            </a></li>
      </ul>
    </div>

    
  </footer>
</div>
    )
}