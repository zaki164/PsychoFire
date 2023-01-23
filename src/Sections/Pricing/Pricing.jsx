import images from '../../constants';
import './Pricing.css';

const Pricing = () => {
  return (
    <div className="pricing" id="pricing">
      <div className="dots dots-up"></div>
      <div className="dots dots-down"></div>
      <h2 className="main-title">PRICING PLANS</h2>
      <div className="container">
        <div className="box">
          <h3>Basic</h3>
          <img src={images.hosting_basic} alt="hosting_basic" />
            <div className="price">
              <span className="amount">$15</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>10GB HDD Space</li>
              <li>5 Email Addresses</li>
              <li>2 Subdomains</li>
              <li>4 Databases</li>
              <li>Basic Support</li>
            </ul>
            <a href="#/">Choose Plan</a>
        </div>
        <div className="box popular">
          <div className="label">Most Popular</div>
          <h3>Advanced</h3>
          <img src={images.hosting_basic} alt="hosting_basic" />
            <div className="price">
              <span className="amount">$25</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>20GB HDD Space</li>
              <li>10 Email Addresses</li>
              <li>5 Subdomains</li>
              <li>8 Databases</li>
              <li>Advanced Support</li>
            </ul>
            <a href="#/">Choose Plan</a>
        </div>
        <div className="box">
          <h3>Professional</h3>
          <img src={images.hosting_basic} alt="hosting_basic" />
            <div className="price">
              <span className="amount">$45</span>
              <span className="time">Per Month</span>
            </div>
            <ul>
              <li>50GB HDD Space</li>
              <li>20 Email Addresses</li>
              <li>10 Subdomains</li>
              <li>20 Databases</li>
              <li>Professional Support</li>
            </ul>
            <a href="#/">Choose Plan</a>
        </div>
      </div>
    </div>
  )
}

export default Pricing