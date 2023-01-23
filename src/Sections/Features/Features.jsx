import images from '../../constants';

import './Features.css';

const Features = () => {
  return (
    <section className="features" id="features">
      <h2 className="main-title">Features</h2>
      <div className="container">
        <div className="box quality">
          <div className="image-holder">
            <img src={images.features1} alt="Feature" />
          </div>
          <h2>Quality</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#/">More</a>
        </div>
        <div className="box time">
          <div className="image-holder">
            <img src={images.features2} alt="Feature" />
          </div>
          <h2>Time</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#/">More</a>
        </div>
        <div className="box passion">
          <div className="image-holder">
            <img src={images.features3} alt="Feature" />
          </div>
          <h2>Passion</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit harum hic veniam eligendi minima</p>
          <a href="#/">More</a>
        </div>
      </div>
    </section>
  )
}

export default Features