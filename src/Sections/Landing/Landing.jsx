import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import images from '../../constants';
import './Landing.css';

const Landing = () => {
  const [t] = useTranslation();
  
  return (
    <section className="landing" id="landing">
      <div className="container">
        <div className="text">
          <h1>{t('landing.welcome')}</h1>
          <p>{t('landing.details')}</p>
        </div>
        <div className="image">
          <img src={images.landing_image} alt="landing" />
        </div>
        <a href="#events" className="go-down">
          <FontAwesomeIcon icon={faAngleDoubleDown} size='2x' />
        </a>
      </div>
    </section>
  )
};

export default Landing;
