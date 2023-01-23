import images from '../../constants';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <h2 className="main-title">Gallery</h2>
      <div className="container">
        <div className="box">
          <div className="image">
            <img src={images.gallery1} alt="Gallery" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={images.gallery2} alt="Gallery" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={images.gallery3} alt="Gallery" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={images.gallery4} alt="Gallery" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={images.gallery5} alt="Gallery" />
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={images.gallery6} alt="Gallery" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Gallery