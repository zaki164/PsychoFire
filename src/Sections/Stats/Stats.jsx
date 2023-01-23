import { faMoneyBillAlt, faUser } from '@fortawesome/free-regular-svg-icons';
import { faCode, faGlobeAsia } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect } from 'react';
import { useRef } from 'react';
import './Stats.css';

const Stats = () => {
  const boxref = useRef();
  const statsref = useRef();
  const startcount = (ele) => {
    let goal = ele.dataset.goal;
    let countInterval = setInterval(() => {
      ele.textContent++;
      if (ele.textContent === goal) {
        clearInterval(countInterval)
      }
    }, 500 / goal)
  }
  useEffect(() => {
    let spanarr = [];
    [...boxref.current.children].forEach(element => {
      spanarr.push(element.lastChild.previousElementSibling);
    });
    let started = false;
    window.addEventListener('scroll', () => {
      if (statsref.current && window.scrollY > statsref.current.offsetTop) {
        if (!started) {
          spanarr.forEach((ele) => {
            startcount(ele);
          })
        }
        started = true;
      }
    })
  }, [])
  return (
    <section className="stats" id="stats" ref={statsref}>
      <h2>Our Awesome Stats</h2>
      <div className="container" ref={boxref}>
        <div className="box">
          <FontAwesomeIcon icon={faUser} fixedWidth size='2x' />
          <span className="number" data-goal="44">0</span>
          <span className="text">Clients</span>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faCode} fixedWidth size='2x' />
          <span className="number" data-goal="155">0</span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faGlobeAsia} fixedWidth size='2x' />
          <span className="number" data-goal="377">0</span>
          <span className="text">Countries</span>
        </div>
        <div className="box">
          <FontAwesomeIcon icon={faMoneyBillAlt} fixedWidth size='2x' />
          <span className="number" data-goal="290">0</span>
          <span className="text">Money</span>
        </div>
      </div>
    </section>
  )
}

export default Stats