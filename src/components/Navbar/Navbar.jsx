import { Link, NavLink } from 'react-router-dom';
import images from '../../constants';
import { useRef, useEffect } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faChartBar, faCheckCircle, faClipboard, faComments, faPlayCircle, faUser } from '@fortawesome/free-regular-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [i18n] = useTranslation();

  const toggleref = useRef();
  const megaref = useRef();
  const stoppropa = (e) => {
    e.stopPropagation();
  }
  const handlemenu = (e) => {
    stoppropa(e);
    megaref.current.classList.toggle('show');
  }
  useEffect(() => {
    document.addEventListener('click', (e) => {
      if (e.target !== toggleref) {
        if (megaref.current.classList.contains('show')) {
          megaref.current.classList.toggle('show');
        }
      }
    })
  }, [])
  return (
    <header className="header" id="header">
      <div className="container">
        <Link exact='true' to="/" className="logo">Psycho</Link>
        <ul className="main-nav">
          <li><NavLink exact='true' to="/Gallery">Gallery</NavLink></li>
          <li><NavLink exact='true' to="/Features">Features</NavLink></li>
          {
            i18n.language === 'en' ? <button onClick={() => {
              document.documentElement.dir = 'rtl'
              document.body.classList.add('ar')
              i18n.changeLanguage('ar')
              }} className='btn'>AR</button> : 
            i18n.language === 'ar' ? <button onClick={() => {
              document.documentElement.dir = 'ltr'
              document.body.classList.remove('ar')
              i18n.changeLanguage('en')
              }} className='btn'>EN</button> : null
          }
          <li><Link to='#/' ref={toggleref} onClick={handlemenu}>Other Links</Link>
            <div className="mega-menu" ref={megaref}>
              <div className="image">
                <img src={images.megamenu} alt="megamenu" />
              </div>
              <ul className="links">
                <li><NavLink exact='true' to="/Testimonials"><FontAwesomeIcon icon={faComments} fixedWidth /> Testimonials</NavLink></li>
                <li><NavLink exact='true' to="/Articles"><FontAwesomeIcon icon={faChartBar} fixedWidth /> Articles</NavLink></li>
                <li><NavLink exact='true' to="/Skills"><FontAwesomeIcon icon={faCheckCircle} fixedWidth /> Our Skills</NavLink></li>
                <li><NavLink exact='true' to="/HowItWorks"><FontAwesomeIcon icon={faClipboard} fixedWidth /> How It Works</NavLink></li>
              </ul>
              <ul className="links">
                <li><NavLink exact='true' to="/Pricing"><FontAwesomeIcon icon={faServer} fixedWidth /> Pricing Plans</NavLink></li>
                <li><NavLink exact='true' to="/TeamMembers"><FontAwesomeIcon icon={faUser} fixedWidth /> Team Members</NavLink></li>
                <li><NavLink exact='true' to="/Services"><FontAwesomeIcon icon={faBuilding} fixedWidth /> Services</NavLink></li>
                <li><NavLink exact='true' to="/TopVideos"><FontAwesomeIcon icon={faPlayCircle} fixedWidth /> Top Videos</NavLink></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}
export default Navbar;
