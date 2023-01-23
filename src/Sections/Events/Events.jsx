import { useEffect, useRef } from 'react';
import images from '../../constants';
import './Events.css';

const Events = () => {
  const timeref = useRef();
  useEffect(() => {
    const spans = [];
    [...timeref.current.children].forEach((ele) => {
      spans.push(ele.firstChild);
    });
    let targetdate = new Date("Dec 31, 2023 23:59:59");
    let timeInterval = setInterval(() => {
      let date = new Date();
      let Diff = targetdate - date;
      let Days = Math.floor(Diff / (24 * 60 * 60 * 1000));
      let Hours = Math.floor(Diff % (24 * 60 * 60 * 1000) / (60 * 60 * 1000));
      let Minutes = Math.floor(Diff % (60 * 60 * 1000) / (60 * 1000));
      let Seconds = Math.floor(Diff % (60 * 1000) / 1000);
      spans.forEach((ele, i) => {
        if (i === 0) {
          ele.textContent = Days < 10 ? `0${Days}` : Days;
        } else if (i === 1) {
          ele.textContent = Hours < 10 ? `0${Hours}` : Hours;
        } else if (i === 2) {
          ele.textContent = Minutes < 10 ? `0${Minutes}` : Minutes;
        } else if (i === 3) {
          ele.textContent = Seconds < 10 ? `0${Seconds}` : Seconds;
        }
      });
      if (Diff === 0) {
        clearInterval(timeInterval);
        spans.forEach((ele, i) => {
          if (i === 0) {
            ele.textContent = "B";
          } else if (i === 1) {
            ele.textContent = "o";
          } else if (i === 2) {
            ele.textContent = "o";
          } else if (i === 3) {
            ele.textContent = "m";
          }
        });
      }
    }, 1000);
  }, [])
  return (
    <section className="events" id="events">
      <h2 className="main-title">LATEST EVENTS</h2>
      <div className="container">
        <img src={images.events} alt="Events" />
        <div className="info">
          <div ref={timeref} className="time">
            <div className="unit">
              <span>62</span>
              <span>Days</span>
            </div>
            <div className="unit">
              <span>02</span>
              <span>Hours</span>
            </div>
            <div className="unit">
              <span>44</span>
              <span>Minutes</span>
            </div>
            <div className="unit">
              <span>56</span>
              <span>Seconds</span>
            </div>
          </div>
          <h2>Tech Masters Event 2021</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et vero tenetur doloremque iusto ut adipisci quam ratione aliquam excepturi nulla in harum, veritatis porro</p>
        </div>
        <div className="subscribe">
          <form action="">
            <input type="email" name='email' placeholder="Enter Your Email" />
            <input type="submit" value="subscribe" />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Events