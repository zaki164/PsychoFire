import images from '../../constants';
import './Discount.css';

const Discount = () => {
  return (
    <section className="discount" id="discount">
      <div className="image">
        <div className="content">
          <h2>We Have A Discount</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi asperiores consectetur, recusandae ratione provident necessitatibus, cumque delectus commodi fuga praesentium beatae. Totam vel similique laborum dicta aperiam odit doloribus corporis.</p>
          <img src={images.discount} alt="Discount" />
        </div>
      </div>
      <div className="form">
        <div className="content">
          <h2>Request A Discount</h2>
          <form action="">
            <input className="input" type="text" name="name" placeholder="Your Name" />
            <input className="input" type="email" name="email" placeholder="Your Email" />
            <input className="input" type="text" name="phone" placeholder="Your Phone" />
            <textarea className="input" name="message" placeholder="Tell us About Your Needs"></textarea>
            <input type="submit" value="send" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Discount