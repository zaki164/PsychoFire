import { faBullhorn, faLaptopCode, faMapMarkedAlt, faPalette, faTools, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Services.css';

const Services = () => {
  return (
    <section className="services" id="services">
      <h2 className="main-title">Services</h2>
      <div className="container">
        <div className="box">
          <FontAwesomeIcon icon={faUserShield} size='4x' />
          <h3>Security</h3>
          <div className="info">
            <a href="#/">Details</a>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faTools} size='4x' />
          <h3>Fixing Issues</h3>
          <div className="info">
            <a href="#/">Details</a>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faMapMarkedAlt} size='4x' />
          <h3>Location</h3>
          <div className="info">
            <a href="#/">Details</a>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faLaptopCode} size='4x' />
          <h3>Coding</h3>
          <div className="info">
            <a href="#/">Details</a>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faPalette} size='4x' />
          <h3>Security</h3>
          <div className="info">
            <a href="#/">Details</a>
          </div>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faBullhorn} size='4x' />
          <h3>Marketing</h3>
          <div className="info">
            <a href="#/">Details</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services