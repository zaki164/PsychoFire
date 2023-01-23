import { useRef } from 'react';
import { useEffect } from 'react';
import images from '../../constants';
import './Skills.css';

const Skills = () => {
  const myspan = useRef();
  useEffect(() => {
    const arr = [];
    [...myspan.current.children].forEach(ele => {
      arr.push(ele.lastChild.firstChild);
    })
    setTimeout(() => {
      arr.forEach((ele) => {
        ele.style.width = ele.dataset.wid;
      })
    }, 0)
  }, [])
  return (
    <section className="our-skills" id="our-skills">
      <h2 className="main-title">OUR SKILLS</h2>
      <div className="container">
        <img src={images.skills} alt="skills" />
        <div ref={myspan} className="skills">
          <div className="skill">
            <h3>HTML <span>80%</span></h3>
            <div className="progress">
              <span data-wid="80%"></span>
            </div>
          </div>
          <div className="skill">
            <h3>CSS <span>85%</span></h3>
            <div className="progress">
              <span data-wid="85%"></span>
            </div>
          </div>
          <div className="skill">
            <h3>JavaScript <span>70%</span></h3>
            <div className="progress">
              <span data-wid="70%"></span>
            </div>
          </div>
          <div className="skill">
            <h3>Python <span>80%</span></h3>
            <div className="progress">
              <span data-wid="80%"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills