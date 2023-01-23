import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import images from '../../constants';
import './Articles.css';

const Articles = () => {
  return (
    <section className="articles" id="articles">
      <h2 className="main-title">Main Title</h2>
      <div className="container">
        <figure className="box">
          <img src={images.cat1} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
        <figure className="box">
          <img src={images.cat2} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
        <figure className="box">
          <img src={images.cat3} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
        <figure className="box">
          <img src={images.cat4} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
        <figure className="box">
          <img src={images.cat5} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
        <figure className="box">
          <img src={images.cat6} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
        <figure className="box">
          <img src={images.cat7} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
        <figure className="box">
          <img src={images.cat8} alt="cat" />
          <figcaption className="content">
            <h3>Test Title</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit</p>
          </figcaption>
          <div className="info">
            <a href="#/">Read More</a>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </div>
        </figure>
      </div>
    </section>
  )
}

export default Articles