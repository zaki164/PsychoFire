import { faFacebookF, faLinkedinIn, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../constants';
import './TeamMembers.css';

const TeamMembers = () => {
  return (
    <section className="team" id="team">
      <h2 className="main-title">TEAM MEMBERS</h2>
      <div className="container">
        <div className="box">
          <div className="data">
            <img src={images.team1} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
        <div className="box">
          <div className="data">
            <img src={images.team2} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
        <div className="box">
          <div className="data">
            <img src={images.team3} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
        <div className="box">
          <div className="data">
            <img src={images.team4} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
        <div className="box">
          <div className="data">
            <img src={images.team5} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
        <div className="box">
          <div className="data">
            <img src={images.team6} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
        <div className="box">
          <div className="data">
            <img src={images.team7} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
        <div className="box">
          <div className="data">
            <img src={images.team8} alt="team" />
            <div className="social">
              <a href="#/">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a href="#/">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
          <div className="info">
            <h3>Name</h3>
            <p>Simple Short Description</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamMembers