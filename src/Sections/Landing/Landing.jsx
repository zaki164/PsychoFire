import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../constants';

import './Landing.css';

const Landing = () => (
  <section className="landing" id="landing">
    <div className="container">
      <div className="text">
        <h1>Welcome, To Psycho World branch-11</h1>
        <p>Here Iam gonna share everything about my life. Books Iam reading, Games Iam Playing, Stories and
          Events</p>
      </div>
      <div className="image">
        <img src={images.landing_image} alt="landing" />
      </div>
      <a href="#events" className="go-down">
        <FontAwesomeIcon icon={faAngleDoubleDown} size='2x'/>
      </a>
    </div>
  </section>
);

export default Landing;
